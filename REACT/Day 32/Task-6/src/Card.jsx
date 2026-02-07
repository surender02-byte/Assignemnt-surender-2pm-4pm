import React from 'react'

function Card({children}) {
   const headingStyle = {
    color: "white",
    
  };


  return (
    <>
    <div style={headingStyle}>
        {children}
    </div>

    </>
  )
}

export default Card