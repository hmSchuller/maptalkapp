import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import Icon from 'react-native-vector-icons/FontAwesome';


const {
	View,
	StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Text,
} = ReactNative

class ListView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMessages(this.props.location.initialPosition);
  }

  items() {
    return this.props.markers.data;
  }

  render(){
    if (this.props.markers.isFetching) {
      return (
        <View style={styles.container}><ActivityIndicator
          animating={true}
          style={[styles.centering, {height: 80}]}
          size="large"
        /></View>
      )
    } else {
      return (
        <ScrollView style={styles.container}>
        {this.props.markers.data.map(item => {
          return (
            <View key={item.id} style={styles.listItemOuterContainer}>
              <View style={styles.listItemInnerContainer}>
								<Text style={styles.author}>{item.attributes.author}</Text>
								<Text style={styles.message}>{item.attributes.text} asjhdjaskdjhasjkdashkjasdjkhasdkjhas dkjasdkjahsdkj ashdkjashdjkashd jkasd</Text>
              </View>
              <Icon name='map-marker' size={40}/>
            </View>
          )
        })}
        </ScrollView>
      )
    }
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
				marginTop: 55,
				backgroundColor: '#c0c0c0'
    },
    listItemOuterContainer: {
      flex: 2,
			flexDirection: 'row',
			backgroundColor: '#fff',
			justifyContent: 'center',
			alignItems: 'center',
			paddingLeft: 20,
			paddingRight: 20,
			paddingTop: 10,
			paddingBottom: 10,
			marginTop: 15,
    },
    listItemInnerContainer: {
      flex: 2,
			marginRight: 20,
      flexDirection: 'column'
    },
    author: {
      flex: 0.4,
			fontSize: 12,
			color: '#808080'
    },
    message: {
      flex: 1.6,
			fontSize: 18,
    }

});


function mapStateToProps(state) {
	return {
        location: state.location,
        markers: state.markers
	}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
