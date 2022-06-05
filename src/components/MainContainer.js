import React from "react"
import Suggestion from "./Suggestion"
import Image from "./Image"
import Flag from "./Flag"

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
	}

	function deleteInput(event) {
		const key = event.keyCode || event.charCode
		if(key === 8 || key === 46) {
			console.log(event.which)
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
					<input 
						id="country-input"
						className="input"
						type="text"
						placeholder="enter a country"
						name="country"
						onChange={updateCountry}
						onKeyDown={deleteInput}
						value={country[1].name}
						autoComplete="off"
					/>
					{country[0].show &&
						<div className="suggestion-container">
							{suggestions}
						</div>
					}
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

				{country[1].name && 
					<div className="container-buttons">
						{!country[0].show &&
							<button className="button-clear" onClick={clearFields}>clear</button>
						}
					</div>
				}
			</div>

			{capital[0].show &&
				<Flag image={image}/>
			}
		</div>
	)
}
