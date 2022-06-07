import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Home = () => {
    
    const [data, setData]=useState([]);

    const handleClick = async()=>{
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

    }

    useEffect(()=>{

        
    }, []);
    
    return ( 
        <div className="home">
            Home Page
            <button onClick={handleClick}>get data</button>
        </div>
     );
}
 
export default Home;