import React, { Component } from 'react'
import { StatusBar, View, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet, ScrollView, Image, Text , TextInput, Alert} from 'react-native'
import { Container, Button, Header, Footer, FooterTab, Icon, Content, Left, Body, Title, Right, Subtitle, Input,Item} from 'native-base'
import { connect } from 'react-redux'
import { getBook } from '../../public/redux/actions/book'


class home extends Component {
  state = {
    books: [],
  };
  componentDidMount = async () => {
    await this.props.dispatch(getBook(''));
    this.setState({
      books: this.props.book,
    });
  };
    render(){   
      return !this.state.books.isFulfilled ?
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#f5429e" />
      </View>
      :
      <>
          <ScrollView>
            <View>
                <Header style={{ backgroundColor: '#f5429e' }}>
                <StatusBar backgroundColor='#f5429e' barStyle='light-content' />
                    <Body>
                        <Title>Home</Title>
                        <Subtitle>Find Your Favorite Book Here!</Subtitle>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('Login')}>
                            <Icon name='people'/>
                        </Button>
                    </Right>
                </Header>
            </View>
            <View style={{ marginTop: 70, marginHorizontal: 50 }}>
                        <Item>
                            <Icon name='search'/>
                            <Input placeholder='Search' /> 
                        </Item>
            </View>
            <View style={styles.FlatList}>
            <FlatList
              data={this.props.book.bookList.result}
              numColumns={2}
              onEndReachedThreshold={0.2}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('BookDetail', item) }}>
                    <View style={styles.item} key={index}>
                      <Image style={styles.image_url} source={{ uri: `${item.image_url}` }} />
                    </View>
                  </TouchableOpacity>
                );
              }
              }>
            </FlatList>
          </View>
        </ScrollView>            
        </>
    }
}
const mapStateToProps = state => {
  return {
    book: state.book,
  };
};

export default connect(mapStateToProps)(home);

const styles = StyleSheet.create({

  FlatList: {
    alignSelf: 'center',
  },

  item: {
    backgroundColor: 'blue',
    margin: 7,
    borderRadius: 8,
    elevation: 6,
    width: 145,
    height: 215,
  },
  textTitle: {
    fontSize: 10,
    color: 'white',
    alignSelf: 'center',
    paddingBottom: 2,
  },
  image_url: {
    width: 145,
    height: 215,
    borderRadius: 10,
  }
})