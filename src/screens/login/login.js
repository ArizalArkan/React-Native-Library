import React, { Component } from 'react';
import {ScrollView,StyleSheet,View,TextInput,Image,Text,TouchableOpacity,Button,Alert,AsyncStorage} from 'react-native'
import { getByEmail } from '../../public/redux/actions/user'
import {connect} from 'react-redux'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    login = async() => {
        if (this.state.email === '' || this.state.password === '') {
            Alert.alert(
                'Warning',
                'All Filed Must Filled',
            )
        } else {
            await this.props.dispatch(getByEmail({
                email: this.state.email,
                password: this.state.password
            }))
            if (this.props.user.userList === 'Password Salah') {
                Alert.alert(
                    'Warning',
                    'Worng Password'
                )
            } else if (this.props.user.userList === "Email Tidak Terdaftar") {
                Alert.alert(
                    'Warning',
                    'Email Not Found'
                )
            } else {
                await Alert.alert(
                    'Information',
                    'Login Sukses'
                )
                await AsyncStorage.getItem('token').then((result)=>{
                    a = result
                })

                console.warn("Initokenya",a);
                this.props.navigation.navigate('Home')
            }
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={{ marginTop: 80 }}>
                    <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEUjSGfKmI7KQ6sNFoGXMjMVieTWr_-cWa2B843TAeR8_zasZ_2Q" }} style={style.image} />
                </View>
                <View style={style.container}>
                    <TextInput selectionColor={'#f5429e'} style={style.input} placeholder={"Email"} textContentType={'emailAddress'} value={this.state.email} onChangeText={(text) => this.setState({ email: text })} />
                    <TextInput selectionColor={'#f5429e'} style={style.input} placeholder={"password"} secureTextEntry={true} value={this.state.password} onChangeText={(text) => this.setState({ password: text })} />
                    <TouchableOpacity style={{ marginHorizontal: "15%", borderRadius: 50 }}><Text style={{ padding: 10, textAlign: "center", backgroundColor: "#f5429e", borderRadius: 50, color: "white" }} onPress={this.login}>Login</Text></TouchableOpacity>
                </View>
                <View style={{ marginBottom: 100, flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
                    <Text style={{ alignItems: "flex-start" }}>Don't Have An Account ? </Text>
                    <TouchableOpacity style={{ alignItems: 'flex-end' }} onPress={() => this.props.navigation.navigate('Register')}><Text>Register!</Text></TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
const style = StyleSheet.create({
    input: {
        paddingLeft: 30,
        borderColor: '#f5429e',
        borderWidth: 1,
        marginHorizontal: "15%",
        borderRadius: 10,
        marginBottom: 5
    },
    container: {
        marginVertical: 70
    },
    image: {
        width: 100,
        height: 100,
        marginLeft: "50%",
        transform: [{ translateX: -parseInt("50%") }]
    },
})
const mapStateToProps = (state)=>{
    return{
        user:state.user
    }
}
export default connect(mapStateToProps)(Login)