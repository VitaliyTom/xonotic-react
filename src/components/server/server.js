import React, { Component } from 'react';

export default class Server extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleClick = (e) => {
		const button = Array.from(document.querySelectorAll('button'));
		const wrapperSpinner = document.querySelector('.wrapper_spinner');
		const loading = document.querySelector('.loading');
		const wrapperShadow = document.querySelector('.wrapper_shadow');
		const spinner = document.querySelector('.spinner');
		const body = document.querySelector('body');

		wrapperSpinner.classList.add('active');
		loading.classList.add('active');
		wrapperShadow.classList.add('active');
		spinner.classList.add('active');
		body.classList.add('active');

		for (let i = 0; i < button.length; i++) {
			button[i].classList.remove('active');
		}
		e.currentTarget.classList.add('active');
		this.props.changeUrl(e.target.value);
	};

	render() {
		return (
			<React.Fragment>
				<div className="change_server">
					<button
						className="btn server_one active"
						onClick={this.handleClick}
						value="https://dpmaster.deathmask.net/?game=xonotic&showplayers=1&json=1&server=pub.regulars.win:26000"
					>
						The Regulars Instagib
					</button>
				</div>
				<div className="change_server">
					<button
						className="btn server_two"
						onClick={this.handleClick}
						value="https://dpmaster.deathmask.net/?game=xonotic&showplayers=1&json=1&server=pub.regulars.win:26001"
					>
						The Regulars Votable
					</button>
				</div>

				<div className="change_server">
					<button
						className="btn server_three"
						onClick={this.handleClick}
						value="https://dpmaster.deathmask.net/?game=xonotic&showplayers=1&json=1&server=88.198.227.103:26000"
					>
						Relaxed Running
					</button>
				</div>
			</React.Fragment>
		);
	}
}
