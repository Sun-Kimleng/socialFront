import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
    
    const [data, setData]=useState([]);

    useEffect(()=>{

        const config = {
            headers:{
                'accept': 'application/json'
            }
        }

        // const prop = this.props.location.search;

        axios.get(`http://localhost:8000/api/login/facebook/callback`, config)
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