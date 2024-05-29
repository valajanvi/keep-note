import React,{useState} from 'react';

import Header from './Header';
import './index.css';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note'



const App =()=>{
   
   const [addItem,setAddItem]=useState([]);

    const addNote=(input)=>
    {
    
      setAddItem((olddata)=>
      {
         return [...olddata,input]
      })
    }
    const RemoveItem=(id)=>
    {
      setAddItem((old)=>
      {
         return old.filter((val,index)=>
                                                  {
            return index !== id;
         })
      })
    }
   



     return ( <>
     <Header />
   
     <CreateNote  passNote={addNote} />
     
    
    { addItem.map((value,index)=>{
      return <Note 
         key={index}
         id={index}
         title={value.title}
         content={value.content}
         CreateView={RemoveItem}
      />
     }
     )
     }
     <Footer />
     </>);
     }
     export default App ;