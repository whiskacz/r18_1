import React from 'react'
import { FilmsInterface } from '..'




const Component = ({film} : any) => {

const { name, link} = film

  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      width: "200px",
      height: "200px",
      backgroundColor: "#bbb",
      borderRadius:"10px",
      justifyContent:"space-between",
      alignItems:"center"
    }}>
      <p 
      style={{
        maxHeight:"80%"
      }}
      >{name}</p>
      <img src={link} alt="filmPhoto" 
      style={{
        height:"80%",
        width:"80%"
      }}/>
    </div>
  )
}

export default Component