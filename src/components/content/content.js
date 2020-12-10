import React, { Component } from 'react';

import Server from '../server';
import Players from '../players';
import Map from '../map';
import Spinner from '../spinner/spinner';
import Chat from '../chat/chat';

import './content.css';

export default class Content extends Component {
	constructor() {
		super();
		this.state = {
			error: null,
			isLoaded: false,
			players: null,
			url: 'https://dpmaster.deathmask.net/?game=xonotic&showplayers=1&json=1&server=89.163.144.234:26000'
		};
	}

	async componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.state.url !== prevState.url) {
			this.fetchApi2(true);
		}
	}

	fetchApi2 = async (flag) => {
		const response = await fetch(this.state.url);
		const data = await response.json();
		if (data) {
			const [
				{
					address,
					gametype,
					hostname,
					map,
					maxplayers,
					maxspectators,
					name,
					numplayers,
					numspectators,
					ping,
					players,
					protocol,
					retries,
					rules,
					status
				}
			] = data;

			const wrapperSpinner = document.querySelector('.wrapper_spinner');
			const loading = document.querySelector('.loading');
			const wrapperShadow = document.querySelector('.wrapper_shadow');
			const spinner = document.querySelector('.spinner');

			if (
				name !== 'SYSERROR' &&
				status !== 'timeout' &&
				numplayers === (players === undefined ? 0 : players.length)
			) {
				this.setState({
					isLoaded: false,
					addressServer: address,
					gameType: gametype,
					hostnameIp: hostname,
					map: map,
					maxPlayers: maxplayers,
					maxSpectators: maxspectators,
					nameServer: name,
					numplayers: numplayers,
					numSpectators: numspectators,
					pingServer: ping,
					players: players,
					protocolGames: protocol,
					retries: retries,
					status: status,
					rules: rules
				});

				wrapperSpinner.classList.add('deActive');
				loading.classList.remove('deActive');
				wrapperShadow.classList.add('deActive');
				spinner.classList.add('deActive');

				spinner.classList.remove('active');
				wrapperSpinner.classList.remove('active');
				loading.classList.remove('active');
				wrapperShadow.classList.remove('active');
			} else {
				this.setState({
					isLoaded: false
				});

				if (flag) {
					wrapperSpinner.classList.remove('deActive');
					loading.classList.remove('deActive');
					wrapperShadow.classList.remove('deActive');
					spinner.classList.remove('deActive');

					wrapperSpinner.classList.add('active');
					loading.classList.add('active');
					wrapperShadow.classList.add('active');
					spinner.classList.add('active');
				}
			}
		}
	};

	componentDidMount() {
		this.fetchApi2();
		setInterval(() => this.fetchApi2(), 15000);
	}

	changeServer = (url) => {
		this.setState({ url: url });
	};

	render() {
		return (
			<div className="container_content">
				{this.state.isLoaded || !this.state.players ? (
					<Spinner status="active" />
				) : (
					<div className="game_view_wrapper">
						<Spinner status={this.state.isLoaded || !this.state.players ? 'active' : 'deActive'} />
						<div className="header">
							<div className="server_wrapper">
								<div className="description_server">
									<p>
										{' '}
										<span className="description_server_text">server: </span>
										{this.state.nameServer}
									</p>
									<p>
										<span className="description_server_text">address server: </span>
										{this.state.addressServer}
									</p>
									<p>
										<span className="description_server_text">max players: </span>
										{this.state.maxPlayers} / {this.state.players.length}
									</p>
									<p>
										<span className="description_server_text">status: </span>
										{this.state.status}
									</p>
								</div>
								<div className="wrapper_change_server">
									<Server changeUrl={this.changeServer} />
								</div>
							</div>

							<div className="map_wrapper">
								<Map nameMap={this.state.map} server={this.state.url} />
							</div>
						</div>
						<div className="players">
							<Players players={this.state.players} serverName={this.state.nameServer} />
						</div>
						<Chat />
					</div>
				)}
			</div>
		);
	}
}
