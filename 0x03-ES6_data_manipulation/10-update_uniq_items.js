/* eslint-disable */
export default function updateUniqueItems(map) {
	if (!map instanceof Map)) throw Error('Cannot process');
const updatedList = map;
for (const [key, value] of map.entries()) if (value === 1) updatedList.set(key, 100);
return updatedList;
}
