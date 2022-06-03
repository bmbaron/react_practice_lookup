import rawData from "./rawData"

export default function countryData() {
	const modifiedData = rawData.map((item, index) => {
		return (
			{
				...item,
				id: index,
				current: false,
			}
		)
	}) 
	return modifiedData

}