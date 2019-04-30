import Taro,{Component} from '@tarojs/taro';
import {View,Text,Image} from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui'

import Cata from './cata';
import FoodList from './foodlist';

import './food.less';

class Food extends Component{
  constructor(){
      super(...arguments);
      this.state={
        current: 0,
        tabList:[{title:'点菜'},{title:'评价'},{title:'商家'}],
        foodlist:[],
        currentList:[]
      };
  }

  changeTab(value){
    this.setState({current:value});
  }
  // 切换分类
  changeCata(selectCata){
    if(this.state.foodlist.some(item=>item.pid == selectCata.id)){
      // 不需要加载数据
      this.setState({currentList:this.state.foodlist.filter(item=>item.pid == selectCata.id)})
      
    }else{
      // 需要加载数据
      this.setState({foodlist:this.state.foodlist.concat(this.getData(selectCata))},()=>{
        this.setState({currentList:this.state.foodlist.filter(item=>item.pid == selectCata.id)})
      });
    }
  }

  getData(selectCata){
    let count = '0'+ Math.round(Math.random()*2).toString();
    console.log(count);
    let imgurl = `../../asset/img/${count}.jpg`;
    return Array.from(Array(Math.round(Math.random() * 20)),(v,k)=>(
      {img:imgurl,pid:selectCata.id,id:selectCata.id+"_"+k,title:"分类"+selectCata.id+"菜品"+(k+1)}
      ))
  }

  render(){
      let {current,tabList}=this.state;
      console.log(this.state);
      return (
        <View>
            <AtTabs current={current} onClick={this.changeTab.bind(this)} tabList={tabList}>
            <AtTabsPane>
              <View className="food_body">
                <Cata onChangeCata={this.changeCata.bind(this)}/> <FoodList currentList={currentList}/>
              </View>
            </AtTabsPane>
            <AtTabsPane>评价</AtTabsPane>
            <AtTabsPane>商家</AtTabsPane>
            </AtTabs>


        </View>
      )
  }
}

export default Food;