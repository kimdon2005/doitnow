import "./Index.css";

const Titleheader = ({ title }) => {
  return (
    <div className="classpage-header">
      <div className="left">
        <span class="material-symbols-outlined">arrow_back_ios_new</span>
        <p className="title">{title}</p>
      </div>
      <div className="right">
        <span className="material-symbols-outlined">search</span>
        <span className="material-symbols-outlined">settings</span>
      </div>
    </div>
  );
};

export default Titleheader;