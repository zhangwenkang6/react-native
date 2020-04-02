import React, {Component} from 'react';
import {View, Text, Image, TextInput,ImageBackground,BackHandler, TouchableOpacity,AsyncStorage,ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import {myFetch} from './utils'

export default class Login extends Component {
  constructor(){
    super();
    this.state={
      username:'',
      pwd:'',
      isLoading:false
    }
  }

  userhandle = (text)=>{
    this.setState({username:text})
  }
  pwdhandle = (text)=>{
      this.setState({pwd:text})
  }

  login(){
    if(this.state.username !== '' && this.state.pwd !== ''){
        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd}
        ).then(res=>{
            AsyncStorage.getItem(this.state.username)
            .then((get)=>{
                console.log(get)
                if(get){
                    if(this.state.pwd === get){
                        console.log(res)
                        AsyncStorage.setItem('user',JSON.stringify(res.data))
                        .then(()=>{
                            if(res.data.token == '1'){
                                this.setState({isLoading:true})
                                Actions.home();
                            }
                        })
                    }else{
                        ToastAndroid.show('密码错误',100)
                    }
                }else{
                    ToastAndroid.show('账号不存在',100)
                }
            })
        })
    }
    else{
        ToastAndroid.show('请输入完整的信息',100)
    }
    
  }

  componentDidMount(){
    
  }

  render() {
    return (
        <ImageBackground style={{ flex: 1 }} source={require('../images/back1.jpg')}>
            <View style={{flex: 1,justifyContent: 'center'}}>
                {
                    this.state.isLoading
                    ?<View style={{ alignItems: 'center'}}><Text>登录成功</Text></View>
                :null
                }
                <View
                    style={{ alignItems: 'center'}}>
                    <View
                    style={{
                        width: '80%',
                        marginRight: 10,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                        backgroundColor:'white',
                        opacity:0.8,
                        borderRadius:8
                    }}>
                    <Icon name="user" color="red"/>
                    <TextInput placeholder="用户名" onChangeText={this.userhandle}/>
                    </View>
                    <View
                    style={{
                        width: '80%',
                        marginRight: 10,
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                        backgroundColor:'white',
                        opacity:0.8,
                        borderRadius:8,
                        marginTop:10
                    }}>
                    <Icon name="user" color="red"/>
                    <TextInput  secureTextEntry={true} placeholder="密码" onChangeText={this.pwdhandle}/>
                    </View>
                    <TouchableOpacity 
                        style={{
                            width: '80%',
                            height: 40,
                            marginTop: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor:'#3366FF',
                            opacity:0.8,
                            borderRadius:8,
                        }}
                        onPress={()=>{this.login()}}>
                        <Text>登录</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        // style={{
                        //     width: '80%',
                        //     height: 40,
                        //     marginTop: 10,
                        //     alignItems: 'center',
                        //     justifyContent: 'center',
                        //     backgroundColor:'#3366FF',
                        //     opacity:0.8,
                        //     borderRadius:8,
                        // }}
                        onPress={()=>{Actions.sign()}}>
                        <Text   
                            style={{
                                marginTop: 20,
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity:0.8,
                                color:'#242424'
                            }}
                           
                            >没有账号？注册</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
  }
}