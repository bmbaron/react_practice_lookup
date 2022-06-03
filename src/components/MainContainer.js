import React from "react"
import Suggestion from "./Suggestion"

export default function MainContainer(props) {

	const [country, setCountry] = React.useState("")
	const [capital, setCapital] = React.useState("")
	const [suggestions, setSuggestions] = React.useState([])
	
	function findSuggestions(val) {
		return (
				props.data.filter(place => {
				let numMatched = 0;
				for (let i = 0; i < val.length; i++) {
					if (place.country.charAt(i) === val.charAt(i)) {
						numMatched += 1
					}
				}
				if (numMatched === val.length) {
					return place.country
				}
				else return false
			})
		)
	}

	function findCapital(event) {
		return (
				props.data.forEach(place => {
					place.country === event.target.value && setCapital(place.city)
			})
		)
	}

	function manageSuggestions(event, country) {
		setCountry(country)
		setSuggestions([])
		findCapital(event)
	}


	function displaySuggestions(val) {
		setSuggestions(
			findSuggestions(val).map(el => {
				return (
					<Suggestion country={el.country} function={manageSuggestions} key={el.country} />
				)
			})
		)
	}

	function updateCountry(event) {
		event.preventDefault()
		setCountry(event.target.value)
		displaySuggestions(event.target.value)
		// findCapital(event.target.value)
	}

	function handleKeyDown(event) {
		if(event.keyCode === 8 || event.keyCode === 46) {
			setCountry("")
			setCapital("")
			setSuggestions([])
		}
	}

	return (
		<div className="searchbox">
			<input 
				className="searchbox--input"
				type="text"
				placeholder="look up a country"
				name="country"
				onChange={updateCountry}
				onKeyDown={handleKeyDown}
				value={country}
				autoComplete="off"
			/>
			<div className="suggestion-container">
				{suggestions}
			</div>
			<input 
				className="searchbox--output"
				type="text"
				placeholder="capital"
				name="capital"
				readOnly={true}
				value={capital}
			/>
		</div>
	)
}