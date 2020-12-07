import React, { Component } from 'react';

import './map.css';

export default class Map extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mapImg: `https://dl.regulars.win/mapshots/${props.nameMap}.jpg`
		};
	}

	static getDerivedStateFromProps(props, state) {
		if (props.nameMap !== state.mapImg) {
			return {
				mapImg:
					props.nameMap === 'bug-trails2'
						? 'https://cdn.pixabay.com/photo/2020/11/04/07/52/pumpkin-5711688_960_720.jpg'
						: `https://dl.regulars.win/mapshots/${props.nameMap}.jpg`,
				nameMap: props.nameMap
			};
		} else {
			return state;
		}
	}

	render() {
		return (
			<React.Fragment>
				<img className="image" src={this.state.mapImg.toLowerCase()} alt="map" />
				<p>map: {this.props.nameMap}</p>
			</React.Fragment>
		);
	}
}
