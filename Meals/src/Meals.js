import axios from 'axios'
import React,{ useState, useEffect} from 'react';
import './css/meals.css'

//Start of the Container Functional Compenent 
function Meals(props){
    //Declaring varibales using useState Hook
    const[items,setitems] = useState([])

    //Accessing Data from Restful API using axios method inside the useEffect Hook
    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res=>{
            setitems(res.data.meals)
        }).catch(err=>{
            alert(err)
        })
    },[])
    //End of iseEffect Hook
    
    //Mapping the data from the API to create the product Card
    const itemslist = items.map((obj)=>{
        return <div className='meal center'>
               <p>{obj.strMeal}</p>
               <img src={obj.strMealThumb} alt='img' />
               <p>{obj.idMeal}</p>
               </div>
    })
    //End of Mapping Data

    // Return method of the meal component
    return(
        <div className="meals-wrapper center" id="meals">
            {itemslist}
        </div>
    )
}
//End of the Container Function Compenent

export default Meals;