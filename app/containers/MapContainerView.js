import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/Ionicons'

const {
	View,
	StyleSheet,
  ActivityIndicator,
	Dimensions,
	TouchableHighlight
} = ReactNative

class MapContainerView extends Component {
  constructor(props) {
    super(props);
  }

  componenDidMount(){
    this.props.getInitialLocation();
  }

  render(){
		let windowDims = Dimensions.get('window');
    if (this.props.location.isFetching) {
      return (
        <View style={styles.container}><ActivityIndicator
          animating={true}
          style={[styles.centering, {height: 80}]}
          size="large"
        /></View>
      )
    } else {
      return (
        <View style={styles.container}>
          <MapView
            initialRegion={this.props.location.position}
            region={this.props.location.position}
            style={styles.mapView}
            onRegionChange={(region) => {
              console.log(region);
              this.props.changeRegion(region);
            }}
            showsUserLocation={true}
          />
					<View style={this.actionButtonStyle(windowDims.width)}>
						<TouchableHighlight
							onPress={() => {
								console.log("click");
							}}
							>
							<Icon name='ios-add-circle-outline' size={60}/>
						</TouchableHighlight>
					</View>
        </View>
      )
    }
  }

	actionButtonStyle = (width) => {
		return {
			backgroundColor: '#ff5722',
			borderColor: '#ff5722',
			borderWidth: 1,
			height: 50,
			width: 50,
			borderRadius: 50,
			alignItems: 'center',
			justifyContent: 'center',
			position: 'absolute',
			bottom: 60,
			right:width/2-25,
			shadowColor: "#000000",
			shadowOpacity: 0.8,
			shadowRadius: 2,
			shadowOffset: {
				height: 1,
				width: 0
			}
		}
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
		flexDirection: 'column',
    marginTop: 50,
  },
  mapView: {
    flex: 1,
    alignItems: 'stretch',
  },
});


function mapStateToProps(state) {
	return {
    location: state.location,
	}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainerView);
