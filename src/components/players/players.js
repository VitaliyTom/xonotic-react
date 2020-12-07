import React, { Component } from 'react';

import Player from '../player/player';

import './players.css';

let id = 1;

export default class Players extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			played: [],
			spectator: [],
			redTeam: [],
			blueTeam: []
		};
	}

	static getDerivedStateFromProps(props, state) {
		if (props.players !== state.items) {
			return {
				played: props.players.filter((el) => el.score !== -666),
				spectator: props.players.filter((el) => el.score === -666),
				redTeam: props.players.filter((el) => el.team === 1),
				blueTeam: props.players.filter((el) => el.team === 2),
				serverName: props.serverName
			};
		} else {
			return state;
		}
	}

	render() {
		const { played, spectator, redTeam, blueTeam, items } = this.state;
		return (
			<React.Fragment>
				<div className="spectator">
					<h3>
						<span className="spectators_text">SPECTATORS</span> ({' '}
						{spectator === undefined || spectator.length === 0 ? '0' : spectator.length} )
					</h3>
					{spectator.length === undefined ? null : status(spectator)}
				</div>

				<div className="played">
					<h3>
						<span className="played_text">PLAYED</span> ({' '}
						{played === undefined || played.length === 0 ? '0' : played.length} )
					</h3>

					{this.state.serverName === 'exe.pub | Relaxed Running | CTS/XDF' ? (
						<div className="team cts">{status(played)}</div>
					) : (
						<div className="team">
							<div className="red_team">
								<h4>
									<span className="red_team_text">RED TEAM</span> ({' '}
									{redTeam.length === undefined ? '0' : redTeam.length} )
								</h4>
								{redTeam.length === undefined ? '0' : status(redTeam)}
							</div>
							<div className="blue_team">
								<h4>
									<span className="blue_team_text">BLUE TEAM</span> ({' '}
									{blueTeam.length === undefined ? '0' : blueTeam.length} )
								</h4>
								{blueTeam.length === undefined ? '0' : status(blueTeam)}
							</div>
						</div>
					)}
				</div>
			</React.Fragment>
		);
	}
}

function status(arr) {
	return arr.map((element) => (
		<div className="player" key={id++}>
			<Player player={element} />
		</div>
	));
}
