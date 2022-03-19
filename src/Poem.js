import { useParams } from 'react-router';
import './poem.css'
import ReactMarkdown from 'react-markdown';

//generates poem view
const Poem = ({poems, addLike}) => {
    const id = Number(useParams().id)
    const poem = poems.find(p => p.id === id)

    return( 
        <div className = "poemPage">
            <div className = "poemTitle">
                <h2>{poem.title}</h2>
            </div>
            <div className = "authorInfo">
                <h5>by: {poem.author}</h5>
            </div>
            <div className="poemTextOuter">
                <div className = "poemText">
                    <ReactMarkdown>{poem.text}</ReactMarkdown>
                </div>
            </div>
            <div className = "likePoem">
                <h6 className="numLikes">{poem.votes}</h6>
                <button type="button" className="btn btn-primary" onClick={() => addLike(poem.id)}>Like</button>
            </div>
        </div>
    )
}

export default Poem;