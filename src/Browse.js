import {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Browse = () => {

    const params = useParams()
    const [searchMeals, setSearchMeals] = useState([])


    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.search}`)
            .then(({data}) => setSearchMeals(data.meals))
    }, [params.search])

    return (
        <div>
            <Link className="back" to={`/`}>Back</Link>
            <div className='meals'>
                {
                    searchMeals.map(item =>
                        <div key={item.idMeal}>
                            <Link to={`/meal/${item.idMeal}`}>
                                <img src={item.strMealThumb} alt=""/>
                                <p>{item.strMeal}</p>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Browse;