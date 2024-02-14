import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function User(){
    const {id} =useParams();
    const[error,setError]=useState();
    const [isLoaded,setIsLoaded]=useState(false);
    const[user,setUser]=useState([]);

    useEffect(()=>{
        fetch("http://jsonplaceholder.typicode.com/users/"+id)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);
            setIsLoaded(true);
            setUser(data);
        })
        .catch((error)=>{
            setIsLoaded(true)
            setError(error)
        })
    },[])
    if(error){
        return<h1>Error:{error.message}</h1>
    }
    else if(!isLoaded){
        return<h1>Loading...</h1>
    }
    else{
        return(
            <div>
                <h1>User Details</h1>
                <div>Name{user.name}</div>
                <div>Email{user.email}</div>
                <div>Phone{user.phone}</div>
                <div>Website{user.website}</div>
                <div>Address:</div>
                <div>Street:{user.address.street}</div>
                <div>City:{user.address.city}</div>
                <div>Geo Location</div>
                <div>Latitute:{user.address.geo.lat}</div>
                <div>Longitutude:{user.address.geo.lng}</div>
            </div>
        )
    }}

    
export default User;