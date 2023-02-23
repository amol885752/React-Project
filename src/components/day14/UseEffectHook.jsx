import { jsx } from '@emotion/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UseEffectHook() {

    const [color,setColor] =useState("Red")
    const [posts,SetPost]=useState([])

    /*useEffect syntax

        useEffect(
                callbackfunction ,[arguments list]
            )
    */
   //no arg list
//    useEffect(()=>{
//         console.log("called useEffect");
//    })

    //runs only in the first render        
     useEffect(()=>{
        
         (async () => {
            const postRes = await axios.get("https://jsonplaceholder.typicode.com/posts");
            console.log(postRes);
            SetPost(postRes.data)
          })();
       
        
    },[color])

    //
    // useEffect(()=>{
    //     console.log("called useEffect");
    //     //runs on first render
    //     //and dependency value change
    // },[color])

   const changeColor =()=>{
        setColor("Green")
   }
  return (
    <div>
      <h1>useEffect hook</h1>
      <h3>Color:{color}</h3>
      <button onClick={changeColor}>update color</button>
      {posts.map(post=><h3 key={post.id}>{post.title}</h3>)}
    </div>
  )
}

export default UseEffectHook
