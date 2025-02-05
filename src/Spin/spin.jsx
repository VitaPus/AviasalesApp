import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Flex, Spin } from 'antd'
import classes from './spin.module.scss'
const Spinn = () => (
  <Flex align="center" gap="middle">
    <Spin
      className={classes.spin}
      indicator={
        <LoadingOutlined
          style={{
            fontSize: 48,
          }}
          spin
        />
      }
    />
  </Flex>
)
export default Spinn
