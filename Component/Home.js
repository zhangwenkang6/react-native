import React, { Component } from 'react'
import { Text, View,ScrollView,TextInput,Image,StyleSheet,Dimensions,BackHandler,ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Swiper from 'react-native-swiper';
import Button from 'react-native-button';

const {width} = Dimensions.get('window');

export default class Home extends Component {
    componentDidMount(){
       
    }
    
    render() {
        // let now = 0;
        // BackHandler.addEventListener('back',()=>{
        //     console.log(now)
        //     if(new Date().getTime()-now < 2000){
        //         BackHandler.exitApp();
        //         // return false;
        //     }else{
        //         ToastAndroid.show('确定要退出吗',100)
        //         now = new Date().getTime();
        //         return true;
        //     }
        // })

        return (
            <ScrollView style={{backgroundColor:'#f4f4f4'}}>
                <View style={{flexDirection:'row',backgroundColor:'red'}}>
                    <View style={{
                        borderColor:'black',
                        backgroundColor:'#fbb8b8',
                        alignItems:'center',
                        flexDirection:'row',
                        borderWidth:0,borderRadius:20,
                        height:40,width:'80%',marginLeft:'4%',
                        marginTop:10,marginBottom:10,
                        // justifyContent:'space-between'
                    }}>
                        <Image source={require('../images/seach1.png')} style={{width:30,height:30,marginLeft:'2%',opacity:0.8}}></Image>
                        <TextInput placeholder="请输入你要搜索的关键字" placeholderTextColor='#ffffff' style={styles.seach}></TextInput>
                    </View>
                    <View style={styles.icon}>
                        <Icon name="shoppingcart" color='white' size={32}></Icon>
                    </View>
                </View> 
                <Swiper style={styles.wrapper} showsButtons={false}
                    loop={true} autoplay={true} activeDotColor={'red'}  >
                    <Image source={require('../images/server1.png')} style={styles.slide1}></Image>
                    <Image source={require('../images/server2.png')} style={styles.slide1}></Image>
                    <Image source={require('../images/server1.png')} style={styles.slide1}></Image>
                </Swiper>
                <View style={styles.box}>
                    <Image source={require('../images/yuan1.png')} style={styles.boxImage}></Image>
                    <View ><Text style={styles.boxText}>居家维修保养</Text></View>
                    <Icon name="right" color="#dddddd" size={25} style={styles.boxIcon}></Icon>
                </View>
                <View style={styles.box}>
                    <Image source={require('../images/yuan2.png')} style={styles.boxImage}></Image>
                    <View ><Text style={styles.boxText}>住宿优惠</Text></View>
                    <Icon name="right" color="#dddddd" size={25} style={styles.boxIcon}></Icon>
                </View>
                <View style={styles.box}>
                    <Image source={require('../images/yuan3.png')} style={styles.boxImage}></Image>
                    <View ><Text style={styles.boxText}>出行接送</Text></View>
                    <Icon name="right" color="#dddddd" size={25} style={styles.boxIcon}></Icon>
                </View>
                <View style={styles.box}>
                    <Image source={require('../images/yuan4.png')} style={styles.boxImage}></Image>
                    <View ><Text style={styles.boxText}>E族活动</Text></View>
                    <Icon name="right" color="#dddddd" size={25} style={styles.boxIcon}></Icon>
                </View>
                <Button style={styles.button}>发布需求</Button>
                <Text style={styles.text}>©E族之家 版权所有</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    seach:{
      color:'black',
      fontSize:18,
      opacity:0.8
    },
    icon:{
      marginRight:'2%',
      flexDirection:'row',
      alignContent:'center',
      height:40,
      marginLeft:'4%',
      marginTop:14,marginBottom:6,
    },
    wrapper:{
        height:220,
    },
    slide1: {
        height:220,
        flex: 1,
        width:width
    },
    box:{
        marginTop:10,
        height:100,
        width:width,
        backgroundColor:'#ffffff',
        flexDirection:'row',
        alignContent:'center',
    },
    boxImage:{
        width:90,
        height:90,
        borderRadius:45,
        marginTop:5,
        marginBottom:5,
        marginLeft:width*0.05
    },
    boxText:{
        width:width*0.33,
        height:100,
        textAlign:'left',
        fontSize:20,
        textAlignVertical:'center',
        marginLeft:width*0.07
    },
    boxIcon:{
        alignItems:'center',
        justifyContent:'center',
        textAlignVertical:'center',
        height:100,
        marginLeft:width*0.25
    },
    button:{
        width:width*0.8,
        marginLeft:width*0.1,
        backgroundColor:'red',
        height:40,
        fontSize:18,
        borderRadius:4,
        color:'#ffffff',
        marginTop:25,
        textAlignVertical:'center',
        marginBottom:35
    },
    text:{
        width:width,
        fontSize:14,
        textAlign:'center',
        marginBottom:15,
        color:'#c8c8c8'
    }
  });