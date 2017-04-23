import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/Ionicons'
import { Actions } from 'react-native-router-flux'

const {
	View,
	StyleSheet,
  ActivityIndicator,
	Dimensions,
	TouchableHighlight,
	Image
} = ReactNative

class MapContainerView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
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
            initialRegion={this.props.location.initialPosition}
            region={this.props.location.position}
            style={styles.mapView}
            onRegionChange={(region) => {
              this.props.changeRegion(region);
							this.props.fetchMessages(region);
            }}
            showsUserLocation={true}
          >
					{this.props.markers.data.map(marker => (
				     <MapView.Marker key={marker.id}
					      coordinate={{latitude: marker.attributes.lat,longitude:marker.attributes.lng}}
					      title={marker.attributes.text}
					      description={marker.attributes.author}
								pinColor={this.pinColorForType(marker.attributes.type)}
					    />
					))}
					</MapView>
					<View>
						<TouchableHighlight
							onPress={() => {
								Actions.postMessage();
							}}
							>
							<Image source={require("../img/add_button.png")} style={this.actionButtonStyle(windowDims.width)}/>
						</TouchableHighlight>
					</View>
        </View>
      )
    }
  }

	pinColorForType(type) {
		let pinColor;
		if (type=='comment'){
			return '#6cc0e5'
		} else if(type=='traffic') {
			return '#fb4f4f'
		} else if(type=='location'){
			return '#8bc34a'
		}
	}

	actionButtonStyle = (width) => {
		return {
			height: 64,
			width: 64,
			alignItems: 'center',
			justifyContent: 'center',
			position: 'absolute',
			bottom: 60,
			right:width/2-32,
		}
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
		flexDirection: 'column',
    marginTop: 55,
  },
  mapView: {
    flex: 1,
    alignItems: 'stretch',
  },
});


function mapStateToProps(state) {
	return {
    location: state.location,
		markers: state.markers,
	}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainerView);
