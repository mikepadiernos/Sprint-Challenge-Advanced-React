import React from "react";
import { useMaxWidth} from "../../hooks/useMaxWidth";

const Header = () => {

	const [maxWidth, setMaxWidth] = useMaxWidth(false);

	const toggleWidth = e => {
		// e.preventDefault();
		setMaxWidth(!maxWidth);
	};

	return (
		<header className="app-header">
			<h1 className="app-title">Players</h1>
			<label
				className="switch"
			>
				<input
					type="checkbox"
					onChange={toggleWidth}
				/>
				<span
					className="slider"
				/>
			</label>
		</header>
	)
};

export default Header;