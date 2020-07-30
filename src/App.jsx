import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import Newnote from './components/Addnote';



function App(){
    const [notes, setNotes]= useState([]);

    function addnote(newNote){
        setNotes(prevNotes =>{
           return  [...prevNotes,newNote];
        });
    }

    function deleteNote(id){
        setNotes(prevNotes =>{
        return prevNotes.filter((noteItem,index)=>{
                return index!==id;
            });
        });

    }

    return(
        <div>
        <Header />
        <Newnote
        onAdd={addnote} />

        {notes.map((noteItem, index) => <Note 
        key={index} 
        id={index}
        title={noteItem.title}
        content={noteItem.notes}
        onDelete={deleteNote}
        />)}

        <Footer />
        </div>
    )
}

export default App;