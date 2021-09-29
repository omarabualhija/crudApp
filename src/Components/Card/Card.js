import React from 'react'
import styles from"./Card.module.css"

 const Card = ({id,name,gender,deletFunc}) => {


  
 const CardData=
 (<div className={`${styles.DivData} ${gender ==="male" ? styles.male : styles.female}`} >

 <span>{name}</span>
 
 <span >{gender}</span>
 <span  onClick={()=>deletFunc(id)} className="fas fa-trash-alt"></span>
 </div>)

    return (
     <>
  
      {CardData} 
    </>
    )
    }
    
export default Card;





