import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams, Link} from "react-router-dom";

const Ingredients = () => {
    const [ingr, setIngr] = useState([])
    const params = useParams()

    useEffect(()=>{
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.name}`)
            .then(({data})=> setIngr(data.meals))
    }, [params.name])
    return (
        <div>
            qweqet
            {
                ingr.map(item =>(
                    <div>
                        <Link to={`/meal/${item.idMeal}`}>
                            <div className="img-col">
                                <img className="ingr-img" src={item.strMealThumb} />
                            </div>
                            <div>
                                <h4>{item.strMeal}</h4>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Ingredients;