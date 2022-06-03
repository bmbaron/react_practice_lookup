import React from "react"
import Suggestion from "./Suggestion"

export default function SearchBox(props) {

	const [country, setCountry] = React.useState("")
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

	function displaySuggestions(val) {
		setSuggestions(
			findSuggestions(val).map(el => {
				return (
					<Suggestion country={el.country} function={setCountry} key={el.country} />
				)
			})
		)
	}

	function updateCountry(event) {
		event.preventDefault()
		setCountry(event.target.value)
		displaySuggestions(event.target.value)
	}

	function handleKeyDown(event) {
		if(event.keyCode === 8 || event.keyCode === 46) {
			setCountry("")
			setSuggestions([])
		}
	}

	return (
		<div className="searchbox">
			<input 
				className="searchbox--input"
				type="text"
				name="country"
				onChange={updateCountry}
				onKeyDown={handleKeyDown}
				value={country}
				autoComplete="off"
			/>
			<div className="suggestion-container">
				{suggestions}
			</div>
		</div>
	)
}