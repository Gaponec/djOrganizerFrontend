import React, {Component} from 'react';
import {
	Text,
	StyleSheet,
	ScrollView
} from 'react-native';

export default class MyEventList extends Component{
	constructor(props){
		super(props);

		this.state = {

		}
	}


	render(){
		return(
			<ScrollView onScroll={this.scrollEndHandle}>
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
		);
	}
}