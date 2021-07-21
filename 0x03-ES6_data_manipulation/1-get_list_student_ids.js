/* eslint-disable */
export default function getListStudentIds(arg) {
	if (!Array.isArray(arg)) {
		return [];
	}
	return arg.map((item) => {
		return item.id;
	});
};

