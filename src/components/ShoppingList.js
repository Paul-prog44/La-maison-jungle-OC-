import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import CareScale from'./CareScale'

//Fonction d'affichage des plantes dispos
function ShoppingList() {

    //Filtre des catégories pour éviter redondance
    let categories = [];
    plantList.forEach(function(plant) {
        if (!categories.includes(plant.category)) {
            categories.push(plant.category);
        }
    })

    return (
        <div>
            <ul>
                {categories.map((category, index) => (
                    <li key={`${category}-${index}`}>{ category }</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => (
                    <li key={plant.id} className="lmj-plant-item">
                        {plant.name}
                        <CareScale careType='water' scaleValue={plant.water} />
						<CareScale careType='light' scaleValue={plant.light} />                    </li>
                    
                    
                ))}
            </ul>
        </div>
        )
            
    
}

export default ShoppingList