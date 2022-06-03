import React from "react"
import SearchBox from "./SearchBox"
import Results from "./Results"
import Data from "../data/countryData"


export default function Body() {

	const [countryData, setCountryData] = React.useState(Data)


	function displayTest(item) {
		setCountryData(prevData => {
			return prevData.map((data,index) => {
				return (
					index === item ? {...data, current: true} : data
				)
			})
		})
	}

	return (
		<div>	
				<SearchBox function={displayTest} data={countryData}/>
				<Results />
		</div>
	)
}