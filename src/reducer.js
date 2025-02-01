import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  all: false,
  direct: false,
  oneStop: false,
  twoStops: false,
  threeStops: false,
  searchId: null,
  error: null,
  tickets: [],
  loading: false,
}

export const fetchId = createAsyncThunk('filters/fetchId', async function () {
  const responce = await fetch('https://aviasales-test-api.kata.academy/search')

  const data = await responce.json()
  return data
});

export const fetchTickets = createAsyncThunk(
    'filters/fetchTickets',
    async (_, {getState, rejectedWithValue}) => {
        const {searchId} = getState().filters;
        if (!searchId) return rejectedWithValue('Нет searchId');
        
        let allTickets = [];
        let stop = false;

        while (!stop) {
            try {
                const responce= await fetch('https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`');
                if (!responce.ok) throw new Error('Ошибка запроса');

                const data = await responce.json();
                allTickets = [...allTickets, ... data.tickets];
                stop = data.stop;
            } catch (error) {
                return rejectedWithValue('Ошибка при загрузке билетов');
            }
        }
        return allTickets;
    }
)

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleFilter: (state, action) => {
      state[action.payload] = !state[action.payload]
      state.all = Object.values(state)
        .slice(1)
        .every((val) => val)
    },
    toggleAllFilters: (state) => {
      const newState = !state.all
      Object.keys(state).forEach((key) => (state[key] = newState))
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchId.fulfilled, (state, action) => {
        console.log('ID получен:', action.payload)
        state.searchId = action.payload.searchId
      })
      .addCase(fetchId.rejected, () => {
        console.error('Ошибка при получении ID')
      })
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        console.log('Загружено билетов:', action.payload.length)
        state.tickets = action.payload;
        state.loading = false;
      })
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
})

export const { toggleFilter, toggleAllFilters } = filterSlice.actions
export default filterSlice.reducer
