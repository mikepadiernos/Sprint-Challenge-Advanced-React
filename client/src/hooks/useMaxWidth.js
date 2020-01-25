import { useEffect } from 'react';
import { useLocalStorage } from "./useLocalStorage";

export  const useMaxWidth = () => {

	const [maxWidth, setMaxWidth] = useLocalStorage("maxWidth", false)
	;
	useEffect (() => {
		if(localStorage.getItem('maxWidth') === 'true') {
			document.body.classList.add("max-width");
		} else {
			document.body.classList.remove("max-width");
		}
	}, [maxWidth]);

	return [maxWidth, setMaxWidth];

};