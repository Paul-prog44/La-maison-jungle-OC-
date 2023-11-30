function CareAdvice(careType, scaleValue) {
		const scaleType = careType ==='light' ? 'de lumière' : "d'arrosage"
		if (scaleValue === 1) {
			alert('Cette plante requiert peu '+ scaleType )
		} 
		else if (scaleValue === 2) {
			alert('Cette plante requiert modérement '+ scaleType)
		}
		else if (scaleValue === 3) {
			alert('Cette plante requiert beaucoup ' + scaleType)
		}
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? '☀️' : '💧' //Affichage du symbole en fonction du scaletype

	return (
		<div onClick={()=>CareAdvice(careType, scaleValue)}>
			{range.map((rangeElem) => //rangeElem est chacun des élements de l'array range
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale