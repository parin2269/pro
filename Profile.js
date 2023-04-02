import React,{Component} from "react"
import {View,Text,TextInput,TouchableOpactiy,Stylesheet,Image,Switch} from"react-native"

export default class Profile extends Component{
    constructor(props){
        super(props)
            this.state={
                username:"",
                age:"",
                Theme:"",
                isEnabled:false
            }
        }
        toggleSwitch(){
        this.setState({
            isEnabled:this.state.isEnabled?false:true
        })
        const enabledState=this.state.isEnabled
        this.setState({
            theme:enabledState?"dark":"light"
        })
        var updates={}
        
        }
        render(){
            return(
                <View style={styles.container}>
                    <Image style={styles.logo}source={require("../assets/logo.jpg")}></Image>
                    <TextInput style={styles.input}
                    onChangeText={text=>this.setState({username:text})}
                    placeholder={"username"}
                    placeholderTextColor="grey"></TextInput>
                    <TextInput style={styles.input}
                    onChangeText={text=>this.setState({age:text})}
                    placeholder={"age"}
                    placeholderTextColor="grey"></TextInput>
                    <View style={styles.themeContainer}>
                        <Text style={styles.themeText}>Darktheme</Text>
                        <Switch style={{transform:[{scaleX:1.3},{scaleY:1.3}]}}
                        trackColor={{
                            false:"grey",
                            true:"blue"
                        }}
                        thumbColor={"red"}
                        onValueChange={()=>this.toggleSwitch()}
                        Value={this.state.isEnabled}></Switch>
                    </View>
                    <TouchableOpactiy style={styles.confirm}
                    onPress={()=>this.updatedb()}>
                        <Text style={styles.confirmtext}>Confirm</Text>
                    </TouchableOpactiy>
                </View>
            )
        }
    }

    const styles=Stylesheet.create({
        container:{
            flex:1
        },
        confirmtext:{
            fontSize:10,
            justifyContent:"center",
            alignItems:"center"
        },
        input:{
            height:40,
            width:10,
            marginTop:40,
            borderWidth:2,
            borderRadius:10,
            borderColor:"blue",
            justifyContent:"center",
            textAlign:"center"
        },
        confirm:{
            marginTop:50,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"Blue",
            width:100,
            height:50
        },
        themeText:{
            color:"green"
        },
        themeContainer:{
            flex:0.2,
            flexDirection:"row",
            justifyContent:"center",
            marginTop:20
        },
        logo:{
            width:50,
            height:50

        }
    })
    
    
    



