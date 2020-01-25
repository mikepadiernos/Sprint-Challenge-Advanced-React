import React from "react";

const Player = ({player}) => {
	return (
		<li className="card list-item">
			<article className="card-player">
				<div className="card-demographics">
					<span className="player player-name">
						{player.name}
					</span>
					<span className="player player-country">
						<span className="player-label">Country</span>
						<span className="player-text">{player.country}</span>
					</span>
				</div>
			</article>
		</li>
	)
};

export default Player;