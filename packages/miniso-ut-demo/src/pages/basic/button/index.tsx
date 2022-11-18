import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { Button as Tb } from '@miniso/miniso-ui'
import './index.scss'

export default class Index extends Component {
  UNSAFE_componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  render() {
    return (
      <View className='index'>
        <Text>
          Hello world!<Tb>w ca le</Tb>
          <Button>按钮</Button>
        </Text>
      </View>
    )
  }
}
