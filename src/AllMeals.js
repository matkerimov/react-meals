import React, {useEffect, useState} from 'react';

const AllMeals = () => {
    useEffect(()=>{
        axios("https://www.themealdb.com/api/json/v2/1/randomselection.php")
            .then(({data}) => useState(data))
    })
    return (
        <div>

            
        </div>
    );
};

export default AllMeals;