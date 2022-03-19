import './Preview.css'
import {Link} from "react-router-dom"
//generates poem preview card


const Preview = (props) => {
    
    return(
        <div className = "poemCard">
            <div className = "poemContent">
                    <Link to= {`/poems/${props.id}`} style={{textDecoration: 'none'}}>
                        <div className = "info">
                            <h2>{props.title}</h2>
                            <h5>by: {props.author}</h5>
                        </div>
                    </Link>
            </div>
        </div>
    );
    
}

export default Preview;