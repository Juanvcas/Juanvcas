import { useEffect } from 'react';

export const useFetch = async (API, setState, render) => {
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(API);
			const jData = await res.json();
			if (setState) {
				setState(jData);
			} else {
				return jData;
			}
		};
		fetchData();
		console.log('render');
	}, [render]);
};
