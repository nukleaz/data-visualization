import { useEffect } from 'react';
import { getData } from './api/api';

export const App = () => {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getData('ttrp1.json');
				console.log(data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, []);

	return <div></div>;
};
