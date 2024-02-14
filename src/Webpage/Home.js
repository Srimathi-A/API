import React, { useState,useEffect } from 'react';

function Home(){
    const[error,setError]=useState();
    const[isLoaded,setIsLoaded]=useState(false);
    const[users,setUsers]=useState([]);

    useEffect(()=>{
        fetch("http://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then((data)=>{
            setIsLoaded(true);
            setUsers(data)
        })
        .catch((error)=>{
            setIsLoaded(true)
            setError(error)
        })
    },[])
    if(error){
        return(
            <div>Error message:{error.message}</div>
        )
    }
    else if(!isLoaded){
        return<h1>Loading..</h1>
    
    }
    else{
        return(
            <div>
                <ul>
                    {
                        users.map(user=>{
                            <li key ={user.id}>
                                {user.name}
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
    
    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}
export default Home;