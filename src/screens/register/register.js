import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    TextInput,
    Image,
    Text,
    TouchableOpacity,
    Button,
    Alert,
    AsyncStorage
} from 'react-native'
import { connect } from 'react-redux'
import { register } from '../../public/redux/actions/user'
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            no_ktp: '',
            fullname: '',
            confirm_password: ''
        }
    }

    regis = async () => {
        if (this.state.email === '' || this.state.password === '' || this.state.no_ktp === '' || this.state.fullname === '' || this.state.confirm_password === '') {
            Alert.alert(
                'Warning',
                'All filed must be filled'
            )
        } else {
            if (this.state.password === this.state.confirm_password) {
                await this.props.dispatch(register({
                    no_ktp: this.state.no_ktp,
                    fullname: this.state.fullname,
                    email: this.state.email,
                    password: this.state.password
                }))
                if (this.props.user.userList && this.props.user.userList.code && this.props.user.userList.code === "ER_DUP_ENTRY") {
                    Alert.alert(
                        'Warning',
                        'Email already exist'
                    )
                } else {
                    await AsyncStorage.getItem('token').then((result) => {
                        a = result
                    })
                    console.warn("Initokenya", a);

                    Alert.alert(
                        'Warning',
                        'Register Success'
                    )
                    this.props.navigation.navigate('Login')
                }
            } else {
                Alert.alert(
                    'Warning',
                    'Password and Confirm Password Must Be Same',
                )
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
                    <TextInput selectionColor={'#f5429e'} style={style.input} placeholder={"Card Number"} value={this.state.no_ktp} onChangeText={(text) => this.setState({ no_ktp: text })} />
                    <TextInput selectionColor={'#f5429e'} style={style.input} placeholder={"Full Name"} value={this.state.fullname} onChangeText={(text) => this.setState({ fullname: text })} />
                    <TextInput selectionColor={'#f5429e'} style={style.input} placeholder={"Email"} value={this.state.email} onChangeText={(text) => this.setState({ email: text })} />
                    <TextInput selectionColor={'#f5429e'} style={style.input} placeholder={"Password"} secureTextEntry={true} value={this.state.password} onChangeText={(text) => this.setState({ password: text })} />
                    <TextInput selectionColor={'#f5429e'} style={style.input} placeholder={"Confirm Password"} secureTextEntry={true} value={this.state.confirm_password} onChangeText={(text) => this.setState({ confirm_password: text })} />
                    <TouchableOpacity style={{ marginHorizontal: "15%", borderRadius: 50 }} onPress={this.regis}><Text style={{ padding: 10, textAlign: "center", backgroundColor: "#f5429e", borderRadius: 50, color: "white" }}>Register</Text></TouchableOpacity>
                </View>
                <View style={{ marginBottom: 100, flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
                    <Text style={{ alignItems: "flex-start" }}>Already Have An Account ? </Text>
                    <TouchableOpacity style={{ alignItems: 'flex-end' }} onPress={() => this.props.navigation.navigate('Login')}><Text>Login!</Text></TouchableOpacity>
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
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Register)