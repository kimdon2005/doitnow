import "./Index.css";
import { Link } from 'react-router-dom';

// import MaterialIcon, {colorPalette} from 'material-icons-react';
// Navigation 줄대 props에 class_에 아무 값 추가하기 그러면 클래스에 불 켜짐 나머지도 마찬가지
const Navigation = (props) => {
  let class_ = props.class_;
  let work = props.work;
  let make = props.make;
  let join = props.join;
  let my = props.my;  
  return (
    <div className="navigation">
      <div className="">
        <span className="material-symbols-outlined" id={(class_ == null) ? '': 'color_selected'}>
          menu_book
        </span>
        <p id={class_ == null ? '': 'color_selected'}>클래스</p>
      </div>

      <div className="">
        <span className="material-symbols-outlined" id={(work == null) ? '': 'color_selected'} >calendar_month</span>
        <p id={(work == null) ? '': 'color_selected'}>과제</p>
      </div>

      <div className="">
        <span className="material-symbols-outlined" id={(make == null) ? '': 'color_selected'}>add</span>
        <p id={(make == null) ? '': 'color_selected'}>만들기</p>
      </div>

      <div className="">
        <Link to="/joining" style={{ textDecoration: 'none' }}>
        <span className="material-symbols-outlined" id={(join == null) ? '': 'color_selected'}>Link</span>
          <p id={(join == null) ? '': 'color_selected'}>합류하기</p>
        </Link>
      </div>

      <div className="">
        <Link to="/my" style={{ textDecoration: 'none' }}>
        <span className="material-symbols-outlined" id={(my == null) ? '': 'color_selected'}>person</span>
        <p id={(my == null) ? '': 'color_selected'}>MY</p>
        </Link>

      </div>
    </div>
  );
};

export default Navigation;
