import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post(){
    const {id} =useParams();
    const[error,setError]=useState();
    const [isLoaded,setIsLoaded]=useState(false);
    const[user,setUser]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
       userId: 1,
       }),
       headers: {
       'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
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
                <h1>Post Details</h1>
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

    
export default Post;