import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import MapView from 'react-native-maps'


const {
	View,
	StyleSheet,
} = ReactNative

class MapContainerView extends Component {
  constructor(props) {
    super(props);
  }

  render(){
      return (
        <View style={styles.container}>
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
      )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default connect(mapStateToProps, mapDispatchToProps)(MapContainerView);
