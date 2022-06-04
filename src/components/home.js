import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
    
    const [data, setData]=useState([]);

    useEffect(()=>{

        const config = {
            headers:{
                'accept': 'application/json',
            }
        }

        
        
        axios.get(`http://localhost:8000/api/login/facebook/callback${window.location.search}`, config)
        .then(response=>{
            console.log(response.data);
            setData(response.data);
        }).catch(error=>{
            console.log(error);
        });
    }, []);
    
    return ( 
        <div className="home">
            Home Page
        </div>
     );
}
 
export default Home;