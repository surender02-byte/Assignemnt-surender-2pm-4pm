import React, { useEffect, useState } from 'react'

function Liveyear({ year }) {
    const [time,setTime]= useState(new Date());

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTime (new Date()) ;
        },1000)

        return ()=>clearInterval(timer);
    },[])

     const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
   <>
   <p>This year is {year}</p>
   <h1>{hours}:{minutes}:{seconds}</h1>

   </>
  )
}

export default Liveyear