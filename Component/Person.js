import React, { Component } from 'react'
import { Text, View,ScrollView,TextInput,Image,StyleSheet,Dimensions, 
    AsyncStorage,Settings,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
import ImagePicker from 'react-native-image-picker';

const {width} = Dimensions.get('window');
const set = [
    {
        icon:'setting',
        text:'账户管理'
    },
    {
        icon:'enviromento',
        text:'收货地址'
    },
    {
        icon:'idcard',
        text:'我的信息'
    },
    {
        icon:'calendar',
        text:'我的订单'
    },
    {
        icon:'qrcode',
        text:'我的二维码'
    },
    {
        icon:'copyright',
        text:'我的积分'
    },
    {
        icon:'staro',
        text:'我的收藏'
    },
];
const set1 = [
    {
        icon:'tool',
        text:'居家维修保养'
    },
    {
        icon:'car',
        text:'出行接送'
    },
    {
        icon:'user',
        text:'我的受赠人'
    },
    {
        icon:'laptop',
        text:'我的住宿优惠'
    },
    {
        icon:'flag',
        text:'我的活动'
    },
];

const options = {
    title: '设置头像',
    // customButtons: [{ name: 'fb', title: '从相册选择' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

export default class Person extends Component {
    constructor(){
        super();
        this.state={
            img:'',
            head:null
        }
    }


    takephoto(){
        ImagePicker.showImagePicker(options, (response) => {
        if (response.didCancel) {
            return;
        } else if (response.error) {
            console.log('Error:', response.error);
        } else if (response.customButton) {
            console.log('custom:', response.customButton);
        } else {
            const source = { uri: response.uri };
            console.log(source);
            AsyncStorage.setItem('imageUrl',source.uri,
                ()=>{
                    console.log('success');
                    AsyncStorage.getItem('imageUrl')
                        .then((res)=>{
                            this.setState({
                                img:{uri:res}
                            });
                            // console.log(this.state.img);
                            var img = this.state.img.uri ? this.state.img : require('../images/head.png');
                            // console.log(img)
                            this.setState({
                                head:img
                            })
                            console.log(this.state.head)
                    })
                }
            );
        }
        });
    }
    
    async componentDidMount(){
        await AsyncStorage.getItem('imageUrl')
            .then((res)=>{
            // console.log({url:res});
            this.setState({
                img:{uri:res}
            })
        })
        // console.log(this.state.img.uri);
        var img = this.state.img.uri ? this.state.img : require('../images/head.png');
        // console.log(img)
        this.setState({
            head:img
        })
    }

    exit(){
        Actions.login();
        console.log(1)
        this.props.exitLogin();
        AsyncStorage.removeItem('user');
    }

    render() {
        return (
            <ScrollView style={{backgroundColor:'#f4f4f4'}}>
                <View style={styles.red} >
                    <View  style={{marginTop:50,marginBottom:5,flexDirection:'row',justifyContent:'center',textAlignVertical:'center',width:width,height:100}}>
                        <TouchableOpacity onPress={()=>{this.takephoto()}}>
                        <Image source={this.state.head}
                              style={styles.redHead} onPress={()=>{console.log(1)}}></Image>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.redText} onPress={()=>{console.log(1)}}>BINNU DHILLON</Text>
                </View>
                <Image source={require('../images/sss.png')} style={{width:'100%'}}></Image>
                <View style={{width:width,marginBottom:1,backgroundColor:'#fff',height:50,
                        paddingTop:10,flexDirection:'row',alignContent:'center',
                }}>
                    <Icon name='user' color='#c3c3c3' size={30} style={{marginLeft:'3%',marginBottom:10}}></Icon>
                    <Text style={styles.text}>我的个人中心</Text>
                </View>
                <View style={{
                    width:'100%',
                    flexDirection:'row',
                    // paddingLeft:'3%',paddingRight:'3%',
                    flexWrap:'wrap',
                    // marginTop:12,
                    paddingTop:10,
                    marginBottom:10,
                    paddingBottom:0,
                    backgroundColor:'#fff',
                    height:320
                    }}>
                    {/* <View style={{width:width/3,height:100
                        }}>
                        <View style={{marginTop:25,marginBottom:5,flexDirection:'row',
                            justifyContent:'center',width:'100%',
                            height:38
                            }}>
                            <Icon name='setting' color='#c3c3c3' size={30}></Icon>
                        </View>
                        <Text style={styles.text1}>账户管理</Text>
                    </View> */}
                    {
                        set.map((item)=>(
                            <View style={{width:width/3,height:100
                                }}>
                                <View style={{marginTop:15,marginBottom:5,flexDirection:'row',
                                    justifyContent:'center',width:'100%',
                                    height:38
                                    }}>
                                    <Icon name={item.icon} color='#c3c3c3' size={30}></Icon>
                                </View>
                                <Text style={styles.text1}>{item.text}</Text>
                            </View>
                        ))
                    }
                </View>
                <View style={{width:width,marginBottom:1,backgroundColor:'#fff',height:50,
                        paddingTop:10,flexDirection:'row',alignContent:'center',
                }}>
                    <Icon name='tago' color='#c3c3c3' size={30} style={{marginLeft:'3%',marginBottom:10}}></Icon>
                    <Text style={styles.text}>E族活动</Text>
                </View>
                <View style={{
                    width:'100%',
                    flexDirection:'row',
                    // paddingLeft:'3%',paddingRight:'3%',
                    flexWrap:'wrap',
                    // marginTop:12,
                    paddingTop:10,
                    marginBottom:10,
                    paddingBottom:0,
                    backgroundColor:'#fff',
                    height:220
                    }}>
                    {
                        //可以写{}其中蕴含逻辑，比如if(){return <View></View} esle{return <Text></Text>}
                        set1.map((item)=>(
                            <View style={{width:width/3,height:100
                                }}>
                                <View style={{marginTop:15,marginBottom:5,flexDirection:'row',
                                    justifyContent:'center',width:'100%',
                                    height:38
                                    }}>
                                    <Icon name={item.icon} color='#c3c3c3' size={30}></Icon>
                                </View>
                                <Text style={styles.text1}>{item.text}</Text>
                            </View>
                        ))
                    }
                    <TouchableOpacity style={{width:width/3,height:100
                        }} onPress={()=>{Actions.form()}}>
                        <View style={{marginTop:15,marginBottom:5,flexDirection:'row',
                            justifyContent:'center',width:'100%',
                            height:38
                            }}>
                            <Icon name='form' color='#c3c3c3' size={30}></Icon>
                        </View>
                        <Text style={styles.text1}>我的发布</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=>{this.exit()}}>
                    <Text style={styles.text2}>BINNU DHILLON  |  退出</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    red:{
        width:width,
        height:210,
        backgroundColor:'#f23030',
    },
    redHead:{
        width:100,
        height:100,
        borderRadius:50,
        borderColor:'#ffffff',
        borderWidth:1,
        // overflow:"visible",
        resizeMode:'cover'
    },
    redText:{
        fontSize:18,color:'#fff',width:width,
        textAlign:'center',
        height:20,
    },
    text:{
        width:width*0.5,
        height:30,
        textAlign:'left',
        fontSize:20,
        textAlignVertical:'center',
        marginLeft:15,
        color:'#4f4e4e'
    },
    text1:{
        fontSize:18,color:'#4f4e4e',width:'100%',
        textAlign:'center',
        height:20,
    },
    text2:{
        width:width,
        fontSize:14,
        textAlign:'center',
        marginBottom:15,
        marginTop:10,
        color:'#c8c8c8'
    }
  });