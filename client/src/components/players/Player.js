import React from "react";

const Player = ({player}) => {
	return (
		<li className="card list-item">
			<article className="card-player">
				<div className="card-avatar">
					{player.name}
				</div>
			</article>
		</li>
	)
};

export default Player;