import React from 'react'
import Card from '../Card/Card'
import styles from './List.module.css'

const List = ({data,deletFunc,togelSortFunc,togelsort}) => {



const Header=(
     <>
      <div className={styles.DivCard}>
          <span>
          <span>Name</span>
          <span className={togelsort?"fas fa-sort-alpha-up-alt":"fas fa-sort-alpha-down-alt"} onClick={togelSortFunc}></span>
         </span>
          <span>Gender</span>
          <span>ِAction</span>
    </div>
    </>)

const thereIsData= data.map(({id,...otherprops})=>(
    <div key={id} >
        
    <Card deletFunc={deletFunc} id={id} {...otherprops}  ></Card> 
    </div>
))

const msgAdd=(<div className={styles.msgAdd}>plz Add Values</div>)

    return (
    <div>
    {Header}
    {data.length!==0?thereIsData:msgAdd}
    </div>
    )
}


export default List;