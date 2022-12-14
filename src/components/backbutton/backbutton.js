import "./Index.css";
import { AiOutlineLeft } from "react-icons/ai";
const Backbutton = (props) =>{
    let navigate = props.navigate;
    return(
    <div className="backbutton" onClick={() => navigate(-1) }>
        <AiOutlineLeft>
        </AiOutlineLeft>
    </div>

    ) 

}

export default Backbutton;
