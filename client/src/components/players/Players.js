import React from "react";
import Player from "./Player";

const Players = props => {
	return (
		<section className="container container-players">
			<ul className="list list-players">
				{props.players.map(player => (
					<Player
						key={player.id}
						player={player}
					/>
				))}
			</ul>
		</section>
	)
};

export default Players;