import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';



const {
	View,
	StyleSheet,
  TextInput,
  Picker,
  Button,
} = ReactNative


let radio_props = [
  {label: 'Nachricht', value: "comment" },
  {label: 'Verkehr', value: "comment" },
  {label: 'Ort', value: "comment" },
];

class PostView extends Component {
  constructor(props) {
    super(props);
    this.state = {author: '', message: '', type: ''}
  };

  render(){
      return (
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <TextInput
                style={ styles.author }
                placeholder="Nickname"
                onChangeText={(text) => this.setState({author: text})}
                value={this.state.author}/>
            <TextInput
                style={ styles.message }
                placeholder="Nachricht"
                onChangeText={(text) => this.setState({message: text})}
                value={this.state.message}/>
            <View style={styles.picker}>
              <RadioForm
                radio_props={radio_props}
                initial={0}
                onPress={(value) => {this.setState({type:value})}}
              />
            </View>
            <Button onPress={() => {
              if(this.state.author != '' && this.state.message != '' && this.state.type != '') {
                let marker = {
                  type: 'messages',
                  attributes: {
                    text: this.state.message,
                    author: this.state.author,
                    type: this.state.type,
                    lat: this.props.location.initialPosition.latitude,
                    lng: this.props.location.initialPosition.longitude,
                  }
                };
                this.props.postMarker(marker).then(() => {
                  Actions.pop();
                })
              }
            }}
            style={styles.sendButton}
            title="Abschicken"
            />
          </View>

        </View>
      )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#fff',
      flexDirection: 'column',
			marginTop: 80,
    },
    contentContainer: {
      flex: 1,
      marginLeft: 20,
      marginRight: 20,
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    author: {
      paddingLeft: 10,
      height: 30,
      backgroundColor: '#d3d3d3'
    },
    message: {
      marginTop: 15,
      paddingLeft: 10,
      backgroundColor: '#d3d3d3',
      height: 100,
    },
    doneButton: {
      marginTop: 30,
    },
    picker: {
      marginTop: 20,
    }
});


function mapStateToProps(state) {
	return {
        location: state.location
	}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
