import React, { Component } from 'react';

import './spinner.css';

export default class Spinner extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: props.status
		};
	}

	render() {
		return (
			<div className={`loading ${this.props.status}`}>
				<div className={`wrapper_shadow ${this.props.status} `} />
				<div className={`wrapper_spinner ${this.props.status}`}>
					<div className={`spinner ${this.props.status}`} />
					<div className="shadow one" />
					<div className="shadow two" />
					<div className="shadow three" />
					<p className="loading_text">Loading...</p>
				</div>
			</div>
		);
	}
}
