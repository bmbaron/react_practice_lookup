import React from "react"

export default function Suggestion(props) {
	return (
		<button className="suggestion" onClick={() => props.function(props.country)}>
			{props.country}
		</button>
	)
}