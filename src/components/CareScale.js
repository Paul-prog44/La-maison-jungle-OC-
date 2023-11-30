function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? '☀️' : '💧' //Affichage du symbole en fonction du scaletype

	return (
		<div>
			{range.map((rangeElem) => //rangeElem est chacun des élements de l'array range
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale