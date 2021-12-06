import { plantList } from '../datas/plantList'
import "../styles/shoppingList.css"

function ShoppingList() {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <div className='list'>
            <h2>Categories</h2>
            <ul >
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                    
                ))}
            </ul>
            <h2>Plantes</h2>
            <ul>
                {plantList.map((plant) => (
                    <li key={plant.id}>{plant.name}{plant.isBestSale ? <span>🔥</span> : <span>👎</span>}</li>
                ))}
                
            </ul>
        </div>
    )
}

export default ShoppingList