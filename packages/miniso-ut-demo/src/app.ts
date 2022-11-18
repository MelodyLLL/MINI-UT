import { Component, Props } from 'react'
import './app.scss'

type State = any
class App extends Component<State> {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
