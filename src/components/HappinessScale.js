function HappinessScale({scaleValue}) {
    const range = [1, 2, 3]
    const logo = "💟"

    return (
        <div>
            {range.map((rangeElem) => //rangeElem est chacun des élements de l'array range
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}>{logo}</span>
                ) : null
            )}
        </div>
    )
}

export default HappinessScale
