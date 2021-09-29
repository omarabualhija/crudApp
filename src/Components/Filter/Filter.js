import React,{useRef } from 'react'
import styles from './Filter.module.css'



const Filter=({fill,TogelAdd,setTogellAdd})=>{
const search=useRef();


const callfunc=()=>{

const d=(search.current.value);
fill(d);
}

const inputtxt=(<input placeholder="Search For The Name Here..." className={styles.FilterBox} type="text" ref={search} onChange={callfunc}/>)

const btnModal=(

    <button className={styles.btn} onClick={()=>setTogellAdd(!TogelAdd)}>Add</button>
   )

return (

    <div className={styles.BoxDiv} >
        
         {inputtxt}
        {btnModal}
    
    </div>
)


}
export default Filter;

