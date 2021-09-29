import React from 'react'
import styles from '../Add/AddStyle.module.css'
import ReactDOM from 'react-dom';
 const Add = ({AddData,inputHandeler,handelForm,TogelAdd,setTogellAdd,toggleValidation,settoggleValidation,input,setinput }) => {

 

const backdrop=(

<div className={styles.backDrop}   onClick={()=>(settoggleValidation(false)&setTogellAdd(!TogelAdd)  )}></div>

)

   const Cover=(
   <div className={styles.BoxAdd} > 
   <div className={styles.Exit }>
   <span   onClick={()=>(settoggleValidation(false)&setTogellAdd(!TogelAdd))} >x</span>
   </div>
     <form autocomplete="off" onSubmit={(e)=>handelForm(e)}>
         <div>
         <label htmlFor="name">Name</label>
        <input  id="name"  onChange={inputHandeler} type="text" value={input.name} placeholder="Add name"></input>
        {toggleValidation && (<div>please add your name</div>)}
        </div>
        <div>
      
      <label htmlFor="gender">gender</label>
      <select  id="gender" onChange={inputHandeler} value={input.gender} >
          <option value="">--youre gender--</option>
          <option value="male">male</option>
          <option value="femele">female</option>
      </select>
      {toggleValidation && (<div>please add your Gender</div>)}
      </div>
    
      <div>
      <input  type="submit" value="Save"></input>
      </div>
      </form>
   </div>
 
      )
     
     return (

      ReactDOM.createPortal(TogelAdd &&(<>{Cover} {backdrop}   </> ),document.getElementById("Modal") )
   
   )}


export default Add;