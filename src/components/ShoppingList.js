import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem';
import Categories from './Categories';
import { useState } from 'react';

//Fonction d'affichage des plantes dispos
function ShoppingList({ cart, updateCart }) {

    const [activeCategory, setActiveCategory] = useState('')
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
        <div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
            <ul className='lmj-plant-list'>
                {plantList.map(({id, cover, name, water, light, happiness, price, category }) => 
                !activeCategory || activeCategory === category ? (
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
                    
                ) : null
                )}
            </ul>
        </div>
        )
            
    
}

export default ShoppingList