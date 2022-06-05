import React from "react"

export default function(props) {
	return (
		<div className="image-container">
			<img className="image-flag" src={props.image} alt="country flag"></img>
		</div>
	)
}