import  {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from "axios";
import {useHistory} from "react-router-dom";



const MealDetails = () => {
    const params = useParams()
    const [meal, setMeal] = useState({})
    const [video, setVideo] = useState('')

    const strIngredients = Array(20).fill(0).reduce((acc, item, idx) => {
        if (meal[`strIngredient${idx +1}`]){
            return [...acc, meal[`strIngredient${idx +1}`]]
        }
        return acc
    }, [])
    useEffect(()=>{
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then(({data})=> {
                // console.log( axios('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772').then(({data}) => console.log(data))

                let obj = data.meals[0]
                setMeal(obj)
                let str = obj.strYoutube
                setVideo(str.slice(str.indexOf('v=') + 2, str.length))
            })
    },[params.id])
    const history = useHistory();


    return (
        <div >
            <button onClick={() => history.goBack()}>Go Back</button>

            <div className="row">
                <div className="col-details">
                    <img src={meal.strMealThumb} alt="" className="meals-images"/>
                    <div>
                        <h1 className="meal-name">{meal.strMeal}</h1>
                        <p>{meal.strInstructions}</p>
                    </div>
                </div>
                <div className="">

                </div>
                <div className="ingredients">
                    {
                        strIngredients.map(item => (
                            <div className="img">
                                <Link to={`/ingredients/${item}`}>
                                    <img src={`https://www.themealdb.com/images/ingredients/${item}.png`} alt="" className="ingredients-image"/>
                                    <div>{item}</div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video}`}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
        </div>

    );
};

export default MealDetails;