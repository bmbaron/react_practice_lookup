import React from "react"
import MainContainer from "./MainContainer"
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
				<MainContainer function={displayTest} data={countryData}/>
		</div>
	)
}