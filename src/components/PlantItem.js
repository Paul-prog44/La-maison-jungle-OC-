import CareScale from "./CareScale"
import '../styles/PlantItem.css'
import HappinessScale from "./HappinessScale"

function handleClick(plantName) {
    alert(`Vous voulez achetez 1 ${plantName} ? Très bon choix !✨`)
}

function PlantItem({name, cover, id, light, water, happiness}) {
    return (
        <li key={id} className='lmj-plant-item' onClick={()=>handleClick(name)}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} /> 
                <HappinessScale scaleValue={happiness} />
            </div>
        </li>
    )
}



export default PlantItem