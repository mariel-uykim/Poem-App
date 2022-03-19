import './Create.css'
import { useState } from "react";
import axios from "axios";

function Create(props){

    const [newTitle, setTitle] = useState('')
    const [newAuthor, setAuthor] = useState('')
    const [newText, setText] = useState('')

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
    }
    const handleTextChange = (event) => {
    setText(event.target.value);
    }

    const AddPoem = (event) => {
        event.preventDefault();

        const newPoem = {
            title: newTitle,
            author: newAuthor,
            text: newText,
            votes: 0
        }

        axios.post("/api/poems", newPoem, {
            headers: {
                'bob': 'Bobalooba',
            }
        })
            .then(response => {
                console.log("post: ", response)
                props.onSubmit(newPoem)
        })
    }

    return(
        <div className = "createForm">
            <h2>Upload Your Poem</h2>
            <form onSubmit={AddPoem.bind(this)}>
                <div className = "form-group">
                    <label htmlFor = "name">Display Name</label>
                    <input type = "text" name ="name" className ="form-control" placeholder="name" onChange={handleAuthorChange} required/>
                </div>
                <div className = "form-group">
                    <label htmlFor = "title">Poem Title</label>
                    <input type = "text" className ="form-control" name ="title" placeholder="title" onChange={handleTitleChange} required/>
                </div>
                <div className = "form-group">    
                    <label htmlFor = "poemText">Poem</label>
                    <textarea className ="form-control" rows = "4" name ="poemText" placeholder="text" onChange={handleTextChange} required/>
                </div>
                <button type="submit" className ="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Create;