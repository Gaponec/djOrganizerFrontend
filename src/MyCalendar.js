import React, {Component} from 'react';
import {
	NativeModules,
  	Text,
  	ScrollView,
  	View,
  	Dimensions,
  	StyleSheet
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import Modal from 'react-native-modalbox';
import MyEventList from './MyEventList';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

var screen = Dimensions.get('window');

export default class CalendarsScreen extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		marginTop: 300,
    		flex: 0,
    		swipeAreaParam: screen.height*0.5
    	};

    	this.scrollEndHandle = this.scrollEndHandle.bind(this);
    	this.onClose = this.onClose.bind(this);
    	this._onOpen = this._onOpen.bind(this);
    	this.onClosingState = this.onClosingState.bind(this);
  	}

  	scrollEndHandle(event: Object){
  		this.setState({testValue: event.nativeEvent.contentOffset.y});
  		if(event.nativeEvent.contentOffset.y == 0){
  			this.setState({swipeAreaParam: screen.height*0.3});
  		} else{
  			this.setState({swipeAreaParam: 10});
  		}
  	}

  	onClose() {
    	console.log('Modal just closed');
  	}

  	_onOpen(){
  		console.log('Modal just opened');
  	}

  	onClosingState(){
  		console.log('the open/close of the swipeToClose just changed');
  	}

  	render(){
  		return(
  			<View style={styles.container}>
	  			<Calendar
	  				onDayPress={() => this.refs.modal1.open()}
	  				style={[styles.calendar, {flex: this.state.flex}]}
	          		hideExtraDays
	          		markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
		  		/>
	  			<Modal 
	  				style={[styles.modalBegin, styles.modalEnd]}
	  				ref={"modal1"}
	  				position={"bottom"}
	  				swipeToClose={true}
	  				onClosed={this.onClose}
	  				onOpened={this._onOpen}
	  				swipeArea={this.state.swipeAreaParam}
	  				onClosingState={this.onClosingState}
	  			>
			  		<ScrollView style={{width: screen.width}} onScroll={this.scrollEndHandle}>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 2</Text>
						<Text>Мероприятие 3</Text>
						<Text>Мероприятие 4</Text>
						<Text>Мероприятие 5</Text>
						<Text>Мероприятие 6</Text>
						<Text>Мероприятие 7</Text>
						<Text>Мероприятие 8</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 2</Text>
						<Text>Мероприятие 3</Text>
						<Text>Мероприятие 4</Text>
						<Text>Мероприятие 5</Text>
						<Text>Мероприятие 6</Text>
						<Text>Мероприятие 7</Text>
						<Text>Мероприятие 8</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
						<Text>Мероприятие 1</Text>
					</ScrollView>
				</Modal>
	  		</View>
  		);
  	}


}

const styles = StyleSheet.create({
	container: {
    	flex: 1
  	},
  	calendar: {
	    borderTopWidth: 1,
	    paddingTop: 5,
	    borderBottomWidth: 1,
	    borderColor: '#eee',
	    height: 350
	},
  	modalBegin: {
    	justifyContent: 'center',
    	alignItems: 'center'
  	},
  	modalEnd: {
    	height: screen.height*0.75
  	},
});