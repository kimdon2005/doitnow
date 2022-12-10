import "./Index.css";

const Schoolchoosing = () => {
  return (
    <div>
      <div className="Arrow">백</div>
      <div className="schoolchoosing">
        <div className="firstbox1">
          <p>
            재학중이신 <br />
            <span>학교</span>를 택해주세요.
          </p>
        </div>

        <div className="secondbox1">학교입력</div>
        <input
          className="schoolsearchinG"
          placeholder="예)마산용마고등학교"
        ></input>
      </div>
    </div>
  );
};

export default Schoolchoosing;
