import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem';

//Fonction d'affichage des plantes dispos
function ShoppingList({ cart, updateCart }) {

    //Filtre des catégories pour éviter redondance
    let categories = [];
    plantList.forEach(function(plant) {
        if (!categories.includes(plant.category)) {
            categories.push(plant.category);
        }
    })

    function addToCart(name, price) {
        const currentPlantAdded = cart.find((plant) => plant.name === name)
        if (currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant)=> plant.name !==name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantAdded.amount +1 }
            ])
        } else {
            updateCart([...cart, {name, price, amount: 1 }])
        }
    }
    
    return (
        <div>
            <ul>
                {categories.map((category, index) => (
                    <li key={`${category}-${index}`}>{ category }</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({id, cover, name, water, light, happiness, price}) => (
                    <div key={id}>
                    <PlantItem
                        id={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                        happiness={happiness}
                        price={price}
                        />
                    <button onClick={() => addToCart(name, price)}>Ajouter</button>
                    </div>
                    
                ))}
            </ul>
        </div>
        )
            
    
}

export default ShoppingList