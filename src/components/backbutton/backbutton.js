import "./Index.css";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate} from "react-router-dom";

const Backbutton = () =>{
    const navigate = useNavigate();
    return(
    <div className="backbutton" onClick={() => navigate(-1) }>
        <AiOutlineLeft>
        </AiOutlineLeft>
    </div>

    ) 

}

export default Backbutton;
