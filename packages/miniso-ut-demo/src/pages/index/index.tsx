import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { Button } from '@miniso/miniso-ui'
import './index.scss'

export default class Index extends Component {
  UNSAFE_componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>
          Hello world!<Button disabled>w ca le</Button>
        </Text>
      </View>
    )
  }
}
