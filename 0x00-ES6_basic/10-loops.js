/* eslint-disable */
export default function appendToEachArrayValue(array, appendString) {
  const myArray = [];
	for (const element of array) {
		myArray.push(appendString + element);
	}

  return myArray;
}
