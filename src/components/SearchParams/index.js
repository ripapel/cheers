import React, { useState, useEffect } from 'react'

export default function SearchParams() {
    const [name, setName] = useState("");
    const [ingredient, setIngredient] = useState("");
    const [alcoholic, setAlcoholic] = useState("");
    const [glass, setGlass] = useState("");

    const [ingredients, setIngredients] = useState([]);
    const [glasses, setGlasses] = useState([]);

    useEffect(() => {

        fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
            .then(response => response.json())
            .then(json => {
                setIngredients(json.drinks.map(item => item.strIngredient1))
            })

        fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list')
            .then(response => response.json())
            .then(json => {
                setGlasses(json.drinks.map(item => item.strGlass))
            })
    }, [])

    return (
        <div className="search-params">
            <form>
                <input
                    type="text"
                    placeholder="Seach"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <button type="submit">
                </button>
                <button>Advanced</button>
                <div>
                    <label htmlFor="ingredient">
                        Ingredients
                        <select
                            id="ingredient"
                            value={ingredient}
                            onChange={e => setIngredient(e.target.value)}
                            onBlur={e => setIngredient(e.target.value)}
                        >
                            <option>All</option>
                            {ingredients.map(item =>
                                (<option key={item.toLowerCase().replace(' ', '')} value={item}>{item}</option>)
                            )}
                        </select>
                    </label>
                    <label htmlFor="alcoholic">
                        Alcoholic
                        <select
                            id="alcoholic"
                            value={alcoholic}
                            onChange={e => setAlcoholic(e.target.value)}
                            onBlur={e => setAlcoholic(e.target.value)}
                        >
                            <option value="alcoholic">Alcoholic</option>
                            <option value="non_alcoholic">Non Alcoholic</option>
                        </select>
                    </label>
                    <label>
                        Glass
                        <select
                            id="glass"
                            value={glass}
                            onChange={e => setGlass(e.target.value)}
                            onBlur={e => setGlass(e.target.value)}
                        >
                            <option>All</option>
                            {glasses.map(item =>
                                (<option key={item.toLowerCase().replace(' ', '')} value={item}>{item}</option>)
                            )}
                        </select>
                    </label>
                </div>
            </form>
        </div>
    )
}
