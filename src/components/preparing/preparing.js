import Backbutton from "../backbutton/backbutton";
import "./index.css";
import { useNavigate} from "react-router-dom";
import Navigation from "../Navigation/Index";

const Preparing = () =>{
    const navigate = useNavigate();

    return(
        <><><Backbutton navigate={navigate}></Backbutton>
            <div className="preparing">서비스 준비중</div>
            </><Navigation></Navigation></>
    )
}
export default Preparing;