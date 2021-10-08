
import './App.css';
import React,{useState} from 'react';
import List from './Components/List/List'
import Filter from './Components/Filter/Filter'
import Add from './Components/Add/Add'
import BackGround from './Components/BAckGround.mp4'
function App() {
//************State start ***********************************************
  const [data,setdata]=useState([
   {id:1,name:"omar",gender:"male"},
   {id:2,name:"Huda",gender:"female"},
   {id:3,name:"Ahmed",gender:"male"},
   {id:4,name:"Saja",gender:"female"},
   {id:5,name:"karam",gender:"male"},

   
  ]
  )
  const [counter,setcounter]=useState(6);
  const[ inputData,setinputData]=useState(""); 
const [togelsort,settogelsort]=useState(true)
const [TogelAdd,setTogellAdd]=useState(false);
const [toggleValidation,settoggleValidation]=useState(false)
   
     const [input,setinput]=useState(
         {
           name:'',
           gender:''
         }
     );
   
//************State end**************************************************


//*********** Functions**************************************************
const searchhandler= (d)=>{
 const convData=d.toLowerCase();
  setinputData(convData)
 
};

  
const ReturnData=()=>{
if(inputData.length!==0){
  
return(togelsort ? data.filter(el=>el.name.toLowerCase().includes(inputData)).sort((a,b)=>{if(a.name.toLowerCase()<b.name.toLowerCase()){return -1} else{return 1}}):data.filter(el=>el.name.toLowerCase().includes(inputData)).sort((a,b)=>{if(a.name.toLowerCase()>b.name.toLowerCase()){return -1} else{return 1}}))
}


 else{
   if(togelsort){return(data.sort((a,b)=>{if(a.name.toLowerCase()<b.name.toLowerCase()) {return -1} else {return 1}}))}

  else{
    return(data.sort((a,b)=>{if(a.name.toLowerCase()>b.name.toLowerCase()) {return -1} else {return 1}}))
  }

}

}


 const deletRow=(id)=>{

const updateData=data.filter((el)=>{return(el.id!==id)})
setdata(updateData)
console.log()
setcounter(counter-1)
 }


 const togelSortFunc=()=>{
  settogelsort(!togelsort)

 }


//*************Add ****************/
 const AddData=(e)=>{
  const adddata={id:counter,...e}
  setcounter(counter+1);
  data.push(adddata)
console.log(data)
 }



 


 const inputHandeler=(e)=>{
  const key=e.target.id;
  const val=e.target.value;
  setinput({...input,[key]:val})

}

 const handelForm=(e)=>{
  e.preventDefault();
  if(input.name!==""&&input.gender!==""){
  AddData(input)
  settoggleValidation(false)
  setTogellAdd(!TogelAdd)
  
}
else{
  settoggleValidation(true)

}
  
  setinput({name:"",gender:""})
}


//*************Add ****************/



//**********End Function*************************************************


  return (
<>
    <video  autoPlay muted loop id="myVideo">
  <source src={BackGround} type="video/mp4"></source>
  </video>
    <div className="App">
     
      <Add
       AddData={AddData}
        inputHandeler={inputHandeler}
        handelForm={handelForm}
        TogelAdd={TogelAdd}
        setTogellAdd={setTogellAdd}
        toggleValidation={toggleValidation}
        settoggleValidation={settoggleValidation}
        input={input}
        setinput={setinput}
       ></Add>
        
<Filter TogelAdd={TogelAdd} setTogellAdd={setTogellAdd}  fill={searchhandler}></Filter>
<List deletFunc={deletRow}  data={ReturnData() } togelSortFunc={togelSortFunc} togelsort={togelsort} ></List>

     </div>
  </>
  );
}

export default App;
