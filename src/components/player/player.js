import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

import HtmlComponent from '../htmlComponent/htmlComponent';

import './player.css';

export default class Player extends Component {
	constructor(props) {
		super(props);
		this.state = {
			item: this.props.player
		};
	}

	render() {
		const { name, ping, score} = this.state.item;
		return (
			<React.Fragment>
				<HtmlComponent name={ReactHtmlParser(name === '' ? 'anonymous' : name)} />
				<p className="score">{score !== -666 ? <span>score: {score}</span> : null}</p>
				<p className="ping"> ping: {ping}</p>
			</React.Fragment>
		);
	}
}
