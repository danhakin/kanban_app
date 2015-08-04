export default function findIndex(arr, prop) {
	const o = arr.filter(prop)[0];
	const ret = o && arr.indexOf(o);

	return ret >= 0 ? ret : -1;
}