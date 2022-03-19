import Preview from "./Preview"
import './App.css';

const Poems = ({poems}) => {
    var sorted = poems.sort((a,b) => {return b.votes-a.votes})
    return(
        <div className = "poemPrev">
            <h5>All Poems</h5>
            <div className = "content">
                {sorted.map((p, idx)=>{
                    return <Preview key={idx} author={p.author} title={p.title} id={p.id} likes = {p.votes}/>
                })}
            </div>
        </div>
    )
}

export default Poems;
