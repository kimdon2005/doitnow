import "./Index.css";

const Backheader = ({ title }) => {
  return (
    <div className="header-ahffk">
      <div className="back-icon">
        <span class="material-symbols-outlined">arrow_back_ios_new</span>
      </div>
      <div className="title">{title}</div>
      <div></div>
    </div>
  );
};

export default Backheader;
