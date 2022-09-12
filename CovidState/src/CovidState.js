import React, {useEffect,useState} from 'react';
import axios from 'axios';

//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

//CovidState Functional Component 
function CovidState(){
    //Declaring variables using useState Hook
    const[coviddata,setcoviddata] = useState([])
    
    //Getting Covid related info from Covid19api using axios method and useEffect Hook
    useEffect(()=>{
        axios.get('https://api.covid19api.com/summary')
        .then(res=>{
            setcoviddata(res.data.Countries);
        }).catch(err=>{
            console.log(err)
        })
        $('#covidtable').DataTable();
    },[]);
   
    //End of UseEffect Hook
       

   //Creating table of the Covid info using map function
   const tabledata = coviddata.map(obj=>{
     return <tr>
     <td>{obj.Country}</td>
     <td>{obj.TotalConfirmed}</td>
     <td>{obj.TotalConfirmed-obj.TotalRecovered}</td>
     <td>{obj.TotalRecovered}</td>
     <td>{obj.TotalDeaths}</td>
     </tr>
   })
    //end of Map function
    return(
        <div className="row">
        <div className="covidstate">
            <h1 className="text-center">Covid Stats</h1>
            <table className="table table-dark" id="covidtable">
                <thead className="thead-light">
                    <tr>
                        <td>Country</td>
                        <td>Cinfirmed</td>
                        <td>Active</td>
                        <td>Recovered</td>
                        <td>Deaths</td>
                    </tr>
                </thead>
                <tbody id="tbody">
                {tabledata}
                </tbody>
            </table>
        </div>
    </div>
    )
}
//End of CovidState Fucntional Component

export default CovidState;