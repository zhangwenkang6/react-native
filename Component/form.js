import React, { Component } from 'react'
import { Text, View,StyleSheet,Dimensions,ToastAndroid,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

const {width} = Dimensions.get('window');


export default class form extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            page:1,
            start:14
        }
    }
    async componentWillMount(){
        await fetch('https://cnodejs.org/api/v1/topics?limit=14')
            .then((res)=>res.json())
            .then((res)=>{
                var a=res.data.length,
                    b=res.data;
                for(var i=0;i<res.data.length;i++){
                    if(b[i].title.length>=15){
                        b[i].title=b[i].title.slice(0,14)+'...'
                    }
                    b[i].content = '';
                    b[i].create_at = b[i].create_at.slice(0,10);
                    var c = Math.round(Math.random());  
                    if(c==1){
                        b[i].answer = '已回复'
                    }else{b[i].answer = '待回复'}
                }
                // console.log(b[0]);
                this.setState({data:b});
            })
    }

    async lastPage(){
        if(this.state.page == 1){
            ToastAndroid.show('当前已经是第一页了',0.5)
        }
        else{
            var pages = this.state.start - 14;
            var num = this.state.page - 1;
            await this.setState({start:pages,page:num});
            console.log(this.state.start);
            await fetch('https://cnodejs.org/api/v1/topics?limit='+ this.state.start)
            .then((res)=>res.json())
            .then((res)=>{
                var a=res.data.length,
                    b=res.data.slice(-14);
                // console.log(a);
                // console.log(b);
                for(var i=0;i<b.length;i++){
                    if(b[i].title.length>=15){
                        b[i].title=b[i].title.slice(0,14)+'...'
                    }
                    b[i].content = '';
                    b[i].create_at = b[i].create_at.slice(0,10);
                    var c = Math.round(Math.random());  
                    if(c==1){
                        b[i].answer = '已回复'
                    }else{b[i].answer = '待回复'}
                }
                console.log(b.length);
                this.setState({data:b});
        })
        }
    }
    async nextPage(){
        var pages = this.state.start + 14;
        var num = this.state.page + 1;
        await this.setState({start:pages,page:num});
        console.log(this.state.start);
        await fetch('https://cnodejs.org/api/v1/topics?limit='+ this.state.start)
        .then((res)=>res.json())
        .then((res)=>{
            var a=res.data.length,
                b=res.data.slice(-14);
            // console.log(a);
            // console.log(b);
            for(var i=0;i<b.length;i++){
                if(b[i].title.length>=15){
                    b[i].title=b[i].title.slice(0,14)+'...'
                }
                b[i].content = '';
                b[i].create_at = b[i].create_at.slice(0,10);
                var c = Math.round(Math.random());  
                if(c==1){
                    b[i].answer = '已回复'
                }else{b[i].answer = '待回复'}
            }
            console.log(b.length);
            this.setState({data:b});
        })
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.title}>
                    <Icon name='left' style={styles.titleLeft} size={20} color='white' onPress={()=>{ Actions.pop()}}></Icon>
                    <Text style={styles.titleText}>我的发布</Text>
                    <Icon name='ellipsis1' style={styles.titleRightn} size={20}  color='white'></Icon>
                </View>
                {
                    this.state.data.map((item)=>(
                        <View style={styles.center}>
                            <Text style={styles.titles}>{item.title}</Text>
                            <Text style={styles.time}>{item.create_at}</Text>
                            {item.answer == '已回复' ? <Text style={styles.answer}>{item.answer}</Text>
                            : <Text style={styles.answer1}>{item.answer}</Text>}
                        </View>
                    ))
                }
                <View style={styles.page}>
                    <Button style={{width:width*0.2,marginLeft:width*0.02,height:30,marginTop:9,
                        borderRadius:15,backgroundColor:'#f23030',fontSize:16,color:'white'}}
                        onPress={()=>{this.lastPage()}}
                        >上一页</Button>
                    <Text style={{width:width*0.56,textAlign:'center',marginTop:10,alignContent:'center',fontSize:16}}>
                        第{this.state.page}页</Text>
                    <Button style={styles.button} onPress={()=>{this.nextPage()}}>下一页</Button>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    page:{
        backgroundColor:'white',
        width:'100%',
        height:50,
        flexDirection:'row',
        alignItems:'center',
        marginTop:5
        // textAlignVertical:'center',
    },
    button:{
        width:width*0.2,marginRight:width*0.02,height:30,marginTop:10,
        borderRadius:15,backgroundColor:'#f23030',
        fontSize:16,color:'white'
    },
    title:{
        // flex:1,
        height:50,
        backgroundColor:'#f23030',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10
        // justifyContent:'center',
        // textAlignVertical:'center',
        // alignContent:'center'
    },
    titleLeft:{
        height:40,
        marginTop:20,
        width:'10%',
        marginLeft:'2%'
    },
    titleText:{
        width:'76%',
        color:'white',
        fontSize:20,
        // marginTop:10
        textAlign:'center',
    },
    titleRightn:{
        height:40,
        marginTop:20,
        width:'10%',
        marginRight:'2%'
    },
    center:{
        backgroundColor:'white',
        width:'100%',
        height:50,
        flexDirection:'row',
        alignItems:'center',
    },
    titles:{
        fontSize:18,
        width:'68%',
        marginLeft:'2%',
        color:'#474646'
    },
    time:{
        fontSize:14,
        width:'20%',
        color:'grey'
    },
    answer:{
        fontSize:14,
        width:'9%',
        marginRight:'1%'
    },
    answer1:{
        fontSize:14,
        width:'9%',
        marginRight:'1%',
        color:'red'
    }
})
