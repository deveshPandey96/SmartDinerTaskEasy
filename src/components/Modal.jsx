import React, { useState } from "react";

function Modal(props){

    const [val, setVal]= useState("");

    if(!props.show){
        return null;
    }
    function handleChange(event){
        setVal(event.target.value);
    }
    function doNotClose(){
            alert("Please provide an input")
        
        
    }
    

    return (
        <div className="container">
        
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Modal</h4>
                        </div>
                        <div className="modal-body">
                            <input onChange={handleChange} className="inputText" autoFocus value={val}></input>
                            
                        </div>
                        <div className="modal-footer">
                            <button onClick={val==="" ? doNotClose: props.onClose} className="button">Close</button>
                        </div>
                    </div>   
                </div>
        </div>
    );
}

export default Modal;
