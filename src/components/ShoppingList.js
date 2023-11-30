import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem';

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
                {plantList.map(({id, cover, name, water, light, happiness}) => (
                    <PlantItem
                        id={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                        happiness={happiness}
                        />
                
                    
                ))}
            </ul>
        </div>
        )
            
    
}

export default ShoppingList