import React from 'react';

const Note=(props)=>{



    const DeleteItem=()=>
    {
             return     props.CreateView(props.id);    
    }





    return <>
        <div className="note">
            <h2>{props.title}</h2>
            <br />
            <p> {props.content} </p>
            <button className="btn delete" onClick={DeleteItem}>⨯</button>
        </div>
    </>;

}
export default Note;