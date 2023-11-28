import { plantList } from '../datas/plantList'

function ShoppingList() {

    let categories = [];

plantList.forEach(function(plant) {
    if (!categories.includes(plant.category)) {
        categories.push(plant.category);
    }
})

    return (
        <ul>
            {categories.map((plant, index) => (
                <li key={`${plant}-${index}`}>{ plant }</li>
            ))}
        </ul>)
    
}

export default ShoppingList