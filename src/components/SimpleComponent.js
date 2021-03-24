import React, {Component} from 'react';

export default class SimpleComponent extends Component {
	
	// Initial state here...
	state = {
		mood: "happy"
	};
	
	handleClick = () => {
		const newMood = this.state.mood !== 'sad' ? 'sad' : 'happy';
		this.setState({ mood: newMood });
		}
	
	render() {
		return <div onClick={this.handleClick}>
			{this.state.mood}
			</div>;
		}
  }