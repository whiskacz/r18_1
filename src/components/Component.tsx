import React from 'react'





function Component({film}) {
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
      key={film.id}
      style={{
        maxHeight:"80%"
      }}
      >{film.name}</p>
      <img src={film.link} alt="filmPhoto" />
    </div>
  )
}

export default Component