import React, { Component,useState,useEffect} from 'react';
import {View,StyleSheet,Text,TextInput,Image,ScrollView,BackHandler,AsyncStorage,ToastAndroid} from 'react-native';
import {Router, Scene,Tabs,Actions,Modal} from "react-native-router-flux";
import Home from './Component/Home';
import Icon from 'react-native-vector-icons/AntDesign';
import List from './Component/List';
import Person from './Component/Person';
import Form from './Component/form';
import Shop from './Component/Shop';
import Login from './Component/Login';
import Sign from './Component/Sign';
import SwipePage from './Component/SwipePage';
import SplashScreen from 'react-native-splash-screen';


console.disableYellowBox = true;

const App = () => {

    let now = 0
    // BackHandler.addEventListener('back',()=>{
    //   if(Actions.currentScene != 'home1' && Actions.currentScene != 'login'){
    //     // Actions.pop();
    //     console.log(Actions.currentScene);
    //     // return true;
    //   }else{
    //     console.log(Actions.currentScene);
    //     if(new Date().getTime()-now < 2000){
    //       BackHandler.exitApp()
    //     }else{
    //       ToastAndroid.show('确定要退出吗',100)
    //       now = new Date().getTime();
    //       return true;
    //     }
    //   }
    // })

  let [isLogin,setLogin] = useState(false);
  let [isInstall,setInstall] = useState(true);
  let init=async()=>{
    await AsyncStorage.getItem('install')
    .then(res=>{
      if(res){
        setInstall(false);
      } 
    })
    AsyncStorage.getItem('user')
    .then(res=>{
      let user = JSON.parse(res)
      console.log(user)
      if(user&&user.token== '1'){
        setLogin(true);
        SplashScreen.hide();
      }else{
        SplashScreen.hide();
      }
    })
  }

  useEffect(()=>{
      // AsyncStorage.clear()
      init();
      AsyncStorage.getAllKeys()
      .then((keys) => console.log(keys))
  },[])
  let afterInstall=()=>{
      setInstall(false);
  }
  let exitLogin=()=>{
    setLogin(false);
    console.log(isLogin);
  }
  if(isInstall){
      return<View style={{flex:1}}>
          <SwipePage afterInstall = {afterInstall}/>
      </View>
  }
  return (
    <Router
      backAndroidHandler={()=>{
        if(Actions.currentScene == 'home1'){
            if(new Date().getTime()-now<2000){
              BackHandler.exitApp();
            }else{
              ToastAndroid.show('确定要退出吗',100);
              now = new Date().getTime();
              return true;
            }
        }else if(Actions.currentScene == 'login'){
            if(new Date().getTime()-now<2000){
              BackHandler.exitApp();
            }else{
              ToastAndroid.show('确定要退出吗',100);
              now = new Date().getTime();
              return true;
            }
        }else{
          console.log(Actions.currentScene);
          Actions.pop();
          return true;
        }
      }}>
      <Modal hideNavBar>
        <Tabs activeTintColor='red' inactiveTintColor='grey'>
          <Scene key='home' title='首页'
                    icon={({focused})=>
                    <Icon name="home" color={focused?'red':'#c9c9c9'} size={28} />
                }>
                  <Scene key = 'home1' component={Home}  hideNavBar/>
          </Scene>
          <Scene key='list' title='商品分类'
                    icon={({focused})=>
                    <Icon name="appstore-o" color={focused?'red':'#c9c9c9'} size={28} />
                }>
                  <Scene key = 'list1' component={List} hideNavBar/>
          </Scene>
          {/* <Scene key='shop' title='购物车'
                    icon={({focused})=>
                    <Icon name="shoppingcart" color={focused?'red':'#c9c9c9'} size={28} />
                } hideNavBar> 
                <Scene key = 'shop' hideTabBar={false} component={Shop}/>
                <Scene key = 'form' hideTabBar={true} component={Form} />
          </Scene> */}
          <Scene key='person' title='个人中心' 
                    icon={({focused})=>
                    <Icon name="user" color={focused?'red':'#c9c9c9'} size={28} />
                } hideNavBar>
                <Scene key = 'person' exitLogin = {exitLogin}  hideTabBar={false} component={Person}/>
                <Scene key = 'form' hideTabBar={true} component={Form} />
          </Scene>
        </Tabs> 
        <Scene initial={!isLogin} key='login' component={Login} hideTabBar={true} hideNavBar>
        </Scene>
        <Scene key='sign' component={Sign} hideTabBar={true} hideNavBar></Scene>
      </Modal>
    </Router>
  )
}


const styles = StyleSheet.create({
  icon:{
    width:20,
    height:20
  }
});

export default App;