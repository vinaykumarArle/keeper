import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function Newnote(props){
    const [note, setNote] = useState({
        title:"",
        notes:"",
    });

    function handleChange(event){
        const {name, value}=event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]:value
            }
        });
    }

    function submitNote(event){
        props.onAdd(note);
        event.preventDefault();
    
    }

    const [isExpand,setExpand]=useState(false);
    function expand(){
        setExpand(true);
    }

    return <div>
        <form className="newnote">
        {isExpand && <input autoFocus type="text" name="title" value={note.title} onChange={handleChange} placeholder="Title" />}{isExpand && <br/>}
        <textarea name="notes" value={note.notes} onClick={expand} onChange={handleChange} placeholder="Take a note...." rows={isExpand ? 3:1} cols="65" />{isExpand && <br/>}
        <Zoom in={isExpand?true:false}><Fab size="small" onClick={submitNote}><AddIcon fontSize="large" /></Fab></Zoom>
        </form>
    </div>

}

export default Newnote;