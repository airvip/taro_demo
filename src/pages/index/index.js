import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'
import 'taro-ui/dist/style/index.scss' 

import Head from '../../components/head/head';
import Food from '../../components/food/food';


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  state = {
    name:"李四"
  }

  componentWillReceiveProps (nextProps) {
    // console.log(this.props, nextProps)
  }

  componentDidMount(){
    // this.setState({name:"李四"})
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  click(){
    this.setState({name:"张三"},()=>{
      console.log(this.state.name)
    })
  }

  change(){
    this.setState({name:"改变name值"})
  }

  render () {
    return (
      <View className='index'>
        <Head/>
        <Food/>
      </View>
    )
  }
}

export default Index
