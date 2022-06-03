import React from "react"

export default function Suggestion(props) {

	return (
		<button 
			className="suggestion"
			onClick={(e) => {
				props.function(e, props.country)
				}}
			value={props.country}
		>
			{props.country}
		</button>
	)
}