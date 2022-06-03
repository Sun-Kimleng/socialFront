import { useEffect, useState } from "react";
import axios from 'axios';


const Login = () => {

    const [facebookUrl, setFacebookUrl]=useState(null);

    useEffect(()=>{
        const config = {
            headers:{
                'accept': 'application/json'
            }
        }
        axios.get('http://127.0.0.1:8000/api/login/facebook/url',config)
        .then(response=>{
            setFacebookUrl(response.data.url);
        }).catch(error=>{
            console.log(error.response);
        });
    },[facebookUrl]);

    return ( 
        <div className="login">
            <button><a href={facebookUrl}>Login with facebook</a></button>
        </div>
     );
}
 
export default Login;