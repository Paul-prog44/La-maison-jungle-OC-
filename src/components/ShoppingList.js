import { plantList } from '../datas/plantList'

function ShoppingList() {

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
        <ul>
            {plantList.map((plant) => (
                <li key={plant.id}>{plant.name}</li>
            ))}
        </ul>
        </div>
        )
            
    
}

export default ShoppingList