import React, { Component } from 'react'
import {
    View,
    TouchableOpacity,
    Alert,
    Text
} from 'react-native'
import { getBorrows } from '../../public/redux/actions/borrow'
class history extends Component {
    constructor(props) {
        super(props)
        this.state = {
            borrow: []
        }
    }
    componentDidMount = async () => {
        if (localStorage.role === "admin") {
            await this.props.dispatch(getBorrows())
        } else {
            await this.props.dispatch(getBorrows(localStorage.token, localStorage.id))
        }
        this.setState({
            borrow: this.props.borrow
        })
    }
    alert = () => {
        return (
            Alert.alert(
                '',
                'Kembalikan ?',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: true },
            )
        )
    }
    render() {
        const borrow = this.state.borrow.borrowList
        return (
            <View>
                {!borrow ? null : borrow.result.map(item => {
                    <TouchableOpacity onPress={this.alert}>
                        <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
                        <Text>asdnasijdn</Text>
                        </View>
                    </TouchableOpacity>
                })
                }
            </View>
        )
    }
}

export default history