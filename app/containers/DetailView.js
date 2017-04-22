import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'



const {
	View,
	StyleSheet,
} = ReactNative

class DetailView extends Component {
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
        backgroundColor: '#123123',
				marginTop: 50,
    },
});


function mapStateToProps(state) {
	return {
	}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);
