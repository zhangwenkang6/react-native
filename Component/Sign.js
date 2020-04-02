import React, {Component} from 'react';
import {View, Text, Image, TextInput,ImageBackground, TouchableOpacity,AsyncStorage,ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import {myFetch} from './utils'

export default class Login extends Component {
  constructor(){
    super();
    this.state={
      username:'',
      pwd:'',
      pwd1:''
    }
  }

  userhandle = (text)=>{
    this.setState({username:text})
  }
  pwdhandle = (text)=>{
      this.setState({pwd:text})
  }
  pwdVerify= (text) =>{
        this.setState({pwd1:text})
  }

  login(){
    if(this.state.username !== '' && this.state.pwd !== '' && this.state.pwd === this.state.pwd1){
        this.setState({isLoading:true});
        myFetch.post('/sign',{
            username:this.state.username,
            pwd:this.state.pwd}
        ).then(res=>{
            console.log(res)
            AsyncStorage.setItem(this.state.username,this.state.pwd)
                .then(()=>{
                    if(res.data.token == '1'){
                        Actions.login();
                    }
                    else{
                        ToastAndroid.show('注册失败',100)
                    }
                })
            })
    }
    else if(this.state.pwd !== this.state.pwd1 ){
        ToastAndroid.show('两次输入的密码不相同',100)
    }
    else{
        ToastAndroid.show('请输入完整的信息',100)
    }
    
  }

  render() {
    return (
        <ImageBackground style={{ flex: 1 }} source={require('../images/back2.jpg')}>
            <View style={{flex: 1,justifyContent: 'center'}}>
                {
                    this.state.isLoading
                    ?<View style={{ alignItems: 'center'}}><Text>注册成功</Text></View>
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
                    <TextInput placeholder="设置用户名" onChangeText={this.userhandle}/>
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
                    <TextInput placeholder="设置密码" secureTextEntry={true} onChangeText={this.pwdhandle}/>
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
                    <TextInput placeholder="确认密码" secureTextEntry={true} onChangeText={this.pwdVerify}/>
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
                        <Text>注册</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
  }
}
