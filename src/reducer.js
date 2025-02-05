import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  all: true,
  direct: true,
  oneStop: true,
  twoStops: true,
  threeStops: true,
  searchId: null,
  error: null,
  tickets: [],
  loading: false,
  sortType: 'cheapest',
}

// Получаем searchId
export const fetchId = createAsyncThunk('filters/fetchId', async () => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search')
  if (!response.ok) throw new Error('Ошибка получения searchId')
  return await response.json()
})

// Загружаем билеты по мере поступления
export const fetchTickets = createAsyncThunk(
  'filters/fetchTickets',
  async (_, { getState, dispatch, rejectWithValue }) => {
    const { searchId } = getState().filters
    if (!searchId) return rejectWithValue('Нет searchId')

    let stop = false
    let attempts = 0

    while (!stop && attempts < 10) {
      try {
        const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
        if (!response.ok) throw new Error(`Ошибка запроса: ${response.status}`)

        const data = await response.json()
        if (!Array.isArray(data.tickets)) throw new Error('Неверный формат данных')

        dispatch(addTickets(data.tickets)) // ✅ Добавляем билеты сразу
        stop = data.stop
      } catch (error) {
        console.error('Ошибка загрузки билетов:', error)

        if (error.name === 'TypeError') {
          return rejectWithValue('Проблемы с интернетом. Проверьте подключение.')
        }

        attempts++
        if (attempts >= 10) {
          return rejectWithValue('Не удалось загрузить билеты после нескольких попыток.')
        }
      }
    }

    return { stop }
  }
)

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      state[action.payload] = !state[action.payload]
      state.all = state.direct && state.oneStop && state.twoStops && state.threeStops
    },
    toggleAllFilters: (state) => {
      const newState = !state.all
      state.direct = newState
      state.oneStop = newState
      state.twoStops = newState
      state.threeStops = newState
      state.all = newState
    },
    setSortType: (state, action) => {
      state.sortType = action.payload
    },
    addTickets: (state, action) => {
      state.tickets = [...state.tickets, ...action.payload] // ✅ Добавляем билеты постепенно
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchId.fulfilled, (state, action) => {
        console.log('ID получен:', action.payload)
        state.searchId = action.payload.searchId
      })
      .addCase(fetchId.rejected, (state, action) => {
        state.error = action.error.message
        console.error('Ошибка при получении ID:', action.error.message)
      })
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        if (action.payload.stop) {
          state.loading = false // ✅ Останавливаем `loading`, когда загрузка завершена
        }
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { toggleFilter, toggleAllFilters, setSortType, addTickets } = filterSlice.actions
export default filterSlice.reducer
