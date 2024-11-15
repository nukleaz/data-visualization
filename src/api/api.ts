const BASE_URL = 'https://rcslabs.ru/';

interface DataProps {
	title: string;
	dev: {
		front: number;
		back: number;
		db: number;
	};
	test: {
		front: number;
		back: number;
		db: number;
	};
	prod: {
		front: number;
		back: number;
		db: number;
	};
	norm: number;
}

export const getData = async (pathName: string): Promise<DataProps> => {
	const response = await fetch(`${BASE_URL}${pathName}`);
	const data = await response.json();
	return data;
};
