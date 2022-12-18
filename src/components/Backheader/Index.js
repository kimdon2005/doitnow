import "./Index.css";
import { useNavigate} from "react-router-dom";

const Backheader = ({ title }) => {
    const navigate = useNavigate();

  return (
    <div className="header-ahffk">
      <div className="back-icon" onClick={()=>{navigate(-1)}}>
        <span class="material-symbols-outlined">arrow_back_ios_new</span>
      </div>
      <div className="title">{title}</div>
      <div></div>
    </div>
  );
};

export default Backheader;