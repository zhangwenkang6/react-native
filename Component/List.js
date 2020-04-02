import React, { Component } from 'react'
import {View,StyleSheet,Text,TextInput,Image,ScrollView} from 'react-native'

export default class List extends Component {
    render() {
        return (
          <ScrollView style={{backgroundColor:'#f4f4f4'}}>
            <View style={{flexDirection:'row',backgroundColor:'#ffffff'}}>
              <View style={{
                borderColor:'black',
                backgroundColor:'#eeeeee',
                alignItems:'center',
                flexDirection:'row',
                borderWidth:0,borderRadius:5,
                height:40,width:'86%',marginRight:'7%',
                marginLeft:'7%',marginTop:10,marginBottom:10,
                justifyContent:'space-between'
              }}>
                <TextInput placeholder="请输入商品名称" placeholderTextColor='#a3a3a3' style={styles.seach}></TextInput>
                <Image source={require('../images/seach.png')} style={{width:20,height:20,marginRight:'2%'}}></Image>
              </View>
            </View> 
            <View style={{
              width:'100%',height:60,
              backgroundColor:'#ffffff',
              marginTop:2,paddingLeft:'7%',
              paddingRight:'7%',
              alignItems:'center',
              flexDirection:'row',
              justifyContent:'space-between'
            }}>
              <Text style={{fontSize:19,color:'red'}}>综合</Text>
              <Text style={{fontSize:19}}>销量</Text>
              <Text style={{fontSize:19}}>新品</Text>
              <Text style={{fontSize:19}}>价格</Text>
              <Text style={{fontSize:19}}>信用</Text>
            </View>
            <View style={{
              width:'100%',
              flexDirection:'row',
              paddingLeft:'3%',paddingRight:'3%',
              flexWrap:'wrap',
              marginTop:12,
              marginBottom:50
            }}>
              <View style={styles.box1}>
                <Image source={require('../images/box1.png')} style={{width:'100%',height:200}}></Image>
                <Text style={{fontSize:16,color:'#a3a3a3',padding:5}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                <Text style={{fontSize:16,color:'red',padding:8}}>36.00</Text>
              </View>
              <View style={styles.box2}>
                <Image source={require('../images/box2.png')} style={{width:'100%',height:200}}></Image>
                <Text style={{fontSize:16,color:'#a3a3a3'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                <Text style={{fontSize:16,color:'red',padding:8}}>36.00</Text>
              </View>
              <View style={styles.box1}>
                <Image source={require('../images/box1.png')} style={{width:'100%',height:200}}></Image>
                <Text style={{fontSize:16,color:'#a3a3a3',padding:5}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                <Text style={{fontSize:16,color:'red',padding:8}}>36.00</Text>
              </View>
              <View style={styles.box2}>
                <Image source={require('../images/box2.png')} style={{width:'100%',height:200}}></Image>
                <Text style={{fontSize:16,color:'#a3a3a3'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                <Text style={{fontSize:16,color:'red',padding:8}}>36.00</Text>
              </View>
              <View style={styles.box1}>
                <Image source={require('../images/box1.png')} style={{width:'100%',height:200}}></Image>
                <Text style={{fontSize:16,color:'#a3a3a3',padding:5}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                <Text style={{fontSize:16,color:'red',padding:8}}>36.00</Text>
              </View>
              <View style={styles.box2}>
                <Image source={require('../images/box2.png')} style={{width:'100%',height:200}}></Image>
                <Text style={{fontSize:16,color:'#a3a3a3'}}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                <Text style={{fontSize:16,color:'red',padding:8}}>36.00</Text>
              </View>
            </View>
            
        </ScrollView>
        )
      }
    }
    
    
    const styles = StyleSheet.create({
      seach:{
        marginLeft:'1%',
        color:'black',
      },
      box1:{
        width:'48%',
        marginRight:'3%',
        height:300,
        backgroundColor:'#ffffff',
        marginBottom:10
      },
      box2:{
        width:'48%',
        height:300,
        backgroundColor:'#ffffff',
        marginBottom:10
      }
    });
    