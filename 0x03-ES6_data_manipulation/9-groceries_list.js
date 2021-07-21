/* eslint-disable */
export default function groceriesList() {
	const groceryListArray = [
		['Apples', 10],
		['Tomatoes', 10],
		['Pasta', 1],
		['Rice', 1],
		['Banana', 5],
	];
	const i = new Map();
	for (const j of groceryListArray) i.set(j[0], j[1]);
	return i;
}
