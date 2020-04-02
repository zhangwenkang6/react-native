import React, { Component } from 'react'
import { Text, View,Image,StyleSheet,AsyncStorage,TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';

export default class SwipePage extends Component {
    start =  () => {
        AsyncStorage.setItem('install','true',()=>{
            this.props.afterInstall();
        });
    };

    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                    <Image source={require('../images/back3.jpg')} style={styles.img}></Image>
                    <TouchableOpacity style={styles.start}  onPress={this.start}>
                        <Text style={styles.startText}>开始体验</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.slide2}>
                    <Image source={require('../images/back4.jpg')} style={styles.img}></Image>
                    <TouchableOpacity style={styles.start}  onPress={this.start}>
                        <Text style={styles.startText}>开始体验</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.slide3}>
                    <Image source={require('../images/back5.jpg')} style={styles.img}></Image>
                    <TouchableOpacity style={styles.start}  onPress={this.start}>
                        <Text style={styles.startText}>开始体验</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>          
        )
    }
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
    },
    slide1: {
        width:'100%',
        height: '100%',
        flex:1
    },
    start: {
        position: 'absolute',
        bottom: 100,
        width: '30%',
        marginLeft:'30%',
        height: 40,
        opacity:0.8,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'white',
        borderRadius: 20,
    },
    startText:{
        fontSize:16,
        color:'blue'
    }
})
