import React, { useState } from 'react';
import './index.css';

const CreateNote = (props) => {

    const [expand,setExpand]=useState(false);


    const [input, setInput] = useState({
        content: "",
        title: "",
    })
    const FCInput = (e) => {

        const { value, name } = e.target;


        setInput((olddata) => {
            return {
                ...olddata, [name]: value

            }
        })

    }
    const addEvent = (event) => {
        event.preventDefault();

        props.passNote(input);
        setInput({
            content: "",
            title: "",
        });


    }
    const CEF =()=>
    {
      setExpand(true);
    }
    const expandoff=()=>
    {
        setExpand(false)
    }


    return (<>
        <div className='main_note' onDoubleClick={expandoff}>
            <form>
                <input type='text'
                    placeholder=' Title'
                    name="title"
                    onChange={FCInput}
                    value={input.title}
                    onClick={CEF}

                    />
                <br />
                {expand?
               <textarea
                    rows=""
                    column=""
                    onChange={FCInput}
                    name="content"
                    value={input.content}
                    placeholder="Write a note here "
                    
                />:null}
                {expand?
            
                <button variant="text" className="btn add" onClick={addEvent} >+</button>:null}
            </form>
        </div>
    </>
    )
}
export default CreateNote;
