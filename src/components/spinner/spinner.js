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
		const wrapperSpinner = document.querySelector('.wrapper_spinner');
		const loading = document.querySelector('.loading');
		const wrapperShadow = document.querySelector('.wrapper_shadow');

		if (wrapperSpinner !== null) {
			wrapperSpinner.classList.remove('active');
			loading.classList.remove('active');
			wrapperShadow.classList.remove('active');
		}

		return (
			<div className="loading">
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
