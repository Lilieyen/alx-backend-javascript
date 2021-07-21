/* eslint-disable */
export default function getStudentIdsSum(students) {
	return students.reduce((total, currentValue) => (currentValue.id + total), 0);
};
