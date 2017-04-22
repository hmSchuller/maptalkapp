import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'

const {
	View,
	StyleSheet,
} = ReactNative

class MapView extends Component {
  constructor(props) {
    super(props);
  }

  render(){
      return (
        <View style={styles.container}></View>
      )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffa500',
				marginTop: 50,
    },
});


function mapStateToProps(state) {
	return {
        userRequest: state.userRequest
	}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MapView);
