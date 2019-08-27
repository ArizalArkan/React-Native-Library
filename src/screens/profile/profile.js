import React, { Component } from 'react'
import { Button, Alert } from 'react-native'
import { Card, CardItem, View, Text , Thumbnail, Container, Content, Form, Item, Label, Input} from 'native-base'

export default class profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            userid: this.props.navigation.getParam('userid')
        }
    }
    render(){
        return(
            <>
            <View>
            <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEUjSGfKmI7KQ6sNFoGXMjMVieTWr_-cWa2B843TAeR8_zasZ_2Q'}} style={{ marginHorizontal: 175 , marginTop:50 }}/>
            </View>
            <View style={{marginTop: 50}}>
          <Form>
            <Item fixedLabel>
              <Label>Username:</Label>
              <Text style={{marginRight: 100}}>Arizal Arkan</Text>
            </Item>
            <Item fixedLabel >
              <Label>No KTP:</Label>
              <Text style={{marginRight: 100}}>023423413</Text>
            </Item>
            <Item fixedLabel >
              <Label>Email:</Label>
              <Text style={{marginRight: 50}}>arkanotaku@gmail.com</Text>
            </Item>
          </Form>
            </View>
            </>
        )
    }
}