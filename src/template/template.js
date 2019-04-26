import Taro,{Component} from '@tarojs/taro';
import {View,Text,Image} from '@tarojs/components';

class Template extends Component{
  constructor(){
      super(...arguments);
      this.state={};
  }
  render(){
      let {store}=this.state;
      return (
        <View>
            Template
        </View>
      )
  }
}

export default Template;