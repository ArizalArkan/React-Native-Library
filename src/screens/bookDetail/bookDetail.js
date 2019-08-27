import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, ScrollView, View, Image, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';


class BookDetails extends Component {
  state = {
    id: this.props.navigation.state.params.id,
    name: this.props.navigation.state.params.name,
    writer: this.props.navigation.state.params.writer,
    description: this.props.navigation.state.params.description,
    image_url: this.props.navigation.state.params.image_url,
    userid: null,
  }
  constructor(props) {
    super(props);
    AsyncStorage.getItem('userid').then((value) => {
      this.setState({ userid: value })
    })
  }
  render() {
    return (
      <ScrollView>
        <View>
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: `${this.state.image_url}` }} />
            <View style={styles.textLeft}>
              <Text style={styles.name}>{this.state.name}</Text>
              <Text style={styles.writer}>By: {this.state.writer}</Text>
            </View>
          </View>
          <Text style={styles.des}>{this.state.description}</Text>

        </View>
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(BookDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    padding: 20
  },
  textLeft: {
    flexDirection: 'column',
    flex: 1,
    paddingLeft: 10
  },
  image: {
    width: 100,
    height: 140,
    borderRadius: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  writer: {
    fontSize: 18,
    paddingBottom: 10
  },
  status: {
    backgroundColor: 'brown',
    color: 'white',
    width: 140,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    elevation: 5,
  },
  statused: {
    backgroundColor: 'green',
    color: 'white',
    width: 140,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    elevation: 5,
  },
  borrow: {
    backgroundColor: '#df42ff',
    marginTop: 8,
    color: 'white',
    width: 140,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    elevation: 5,
  },
  login: {
    backgroundColor: 'purple',
    marginTop: 8,
    color: 'white',
    width: 140,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    elevation: 5,
  },
  des: {
    marginTop: 0,
    padding: 20,
  }
})