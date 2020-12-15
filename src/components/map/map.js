import React, { Component } from 'react';
import { mapPathArray } from './mapsPath/mapsPath';

import './map.css';
import noImage from './assets/no_image.png';

export default class Map extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nameMap: props.nameMap
		};
	}

	static getDerivedStateFromProps(props, state) {
		if (props.nameMap !== state.nameMap) {
			return {
				mapImg:
					state.server ===
					'https://dpmaster.deathmask.net/?game=xonotic&showplayers=1&json=1&server=88.198.227.103:26000'
						? noImage
						: mapPathArray.includes(state.nameMap)
							? noImage
							: `https://dl.regulars.win/mapshots/${props.nameMap.toLowerCase()}.jpg`,
				nameMap: props.nameMap,
				server: props.server
			};
		} else {
			return state;
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.nameMap !== prevProps.nameMap) {
			this.setState((state, props) => {
				return {
					nameMap: props.nameMap,
					server: props.server,
					mapImg:
						state.server ===
						'https://dpmaster.deathmask.net/?game=xonotic&showplayers=1&json=1&server=88.198.227.103:26000'
							? noImage
							: mapPathArray.includes(this.state.nameMap)
								? noImage
								: `https://dl.regulars.win/mapshots/${this.props.nameMap.toLowerCase()}.jpg`
				};
			});
		}
	}

	componentDidMount() {
		this.setState((state, props) => {
			return {
				mapImg: mapPathArray.includes(this.state.nameMap)
					? noImage
					: `https://dl.regulars.win/mapshots/${this.props.nameMap.toLowerCase()}.jpg`,
				nameMap: props.nameMap,
				server: props.server
			};
		});
	}

	render() {
		return (
			<React.Fragment>
				<img className="image" src={this.state.mapImg} alt="map" />
				<p>
					<span className="description_map_text">map: </span>
					{this.props.nameMap}
				</p>
			</React.Fragment>
		);
	}
}
