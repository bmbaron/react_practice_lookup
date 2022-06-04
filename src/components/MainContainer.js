import React from "react"
import Suggestion from "./Suggestion"
import Image from "./Image"

export default function MainContainer(props) {

	const [image, setImage] = React.useState("")

	const [country, setCountry] = React.useState([{show: false}, {name: ""}])
	const [capital, setCapital] = React.useState([{show: false}, {name: ""}])
	const [suggestions, setSuggestions] = React.useState([])
	
	function findSuggestions(input) {
		const val = input.toLowerCase()
		return (
				props.data.filter(place => {
				let numMatched = 0;
				for (let i = 0; i < val.length; i++) {
					if (place.country.charAt(i) === val.charAt(i) || place.country.charAt(i).toLowerCase() === val.charAt(i)){
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
					place.country === event.target.value && setCapital([{show: true}, {name: place.city}])
			})
		)
	}

	function manageSuggestions(event, country) {
		setCountry([{show: false}, {name: country}])
		setSuggestions([])
		findCapital(event)
		Promise.resolve(Image(event.target.value)).then((result)=> setImage(result));
	}


	function displaySuggestions(val) {
		setSuggestions(
			findSuggestions(val).map(suggestion => {
				return (
					<Suggestion country={suggestion.country} function={manageSuggestions} key={suggestion.country} />
				)
			})
		)
	}

	function updateCountry(event) {
		event.preventDefault()
		setCountry([{show: true}, {name: event.target.value}])
		setCapital([{show: false}, {name: ""}])
		displaySuggestions(event.target.value)
		// findCapital(event.target.value)
	}

	function handleKeyDown(event) {
		if(event.keyCode === 8 || event.keyCode === 46) {
			event.preventDefault()
			setCountry([{show: false}, {name: ""}])
			setCapital([{show: false}, {name: ""}])
			setSuggestions([])
		}
	}

	function clearFields() {
		setCountry([{show: false}, {name: ""}])
		setCapital([{show: false}, {name: ""}])
		setSuggestions([])
	}

	return (
		<div>
			<div className="container-main">
				<div className="container-fields">
					{capital[0].show &&
						<label htmlFor="country-input">country</label>
					}

					<input 
						id="country-input"
						className="input"
						type="text"
						placeholder="enter a country"
						name="country"
						onChange={updateCountry}
						onKeyDown={handleKeyDown}
						value={country[1].name}
						autoComplete="off"
					/>

					{country[0].show &&
						<div className="suggestion-container">
							{suggestions}
						</div>
					}

					{capital[0].show && <label htmlFor="city-input">capital city</label>}
					{capital[0].show &&
						<input 
							id="city-input"
							className="output"
							type="text"
							placeholder="capital"
							name="capital"
							readOnly={true}
							value={capital[1].name}
						/>
					}
				</div>
				<div className="container-buttons">
					{!country[0].show &&
						<button className="button-clear" onClick={clearFields}>clear</button>
					}
				</div>
			</div>

			{capital[0].show &&
			<div className="image-container">
				<img className="image-flag" src={image} alt="country flag"></img>
			</div>
			}
		</div>
	)
}