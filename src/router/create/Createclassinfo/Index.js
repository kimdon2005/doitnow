import "./Index.css";

const Createclassinfo = () => {
  return (
    <div>
      <div className="header-ahffk">
        <div className="back-icon">
          <img src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/arrow_back_ios_new/default/48px.svg" />
        </div>
      </div>
      <div classsName="akmood">
        <p>과제 만들기</p>
      </div>

      <h1>학년</h1>

      <select>
        <option>1학년</option>
        <option>2학년</option>
        <option>3학년</option>
        <option>4학년</option>
        <option>5학년</option>
        <option>6학년</option>
      </select>
      <h1>반(중복선택가능)</h1>

      <h2></h2>
      <select>
        <option>1반</option>
        <option>2반</option>
        <option>3반</option>
        <option>4반</option>
        <option>5반</option>
        <option>6반</option>
        <option>7반</option>
      </select>
      <h2></h2>
      <h3></h3>

      <h3>제목</h3>
      <input
        type="text"
        placeholder="제목"
        title="제목"
        class="input_text"
        maxlength="16"
      />
      <h3></h3>
      <h4></h4>

      <h4>내용</h4>
      <input
        placeholder="내용을 적어주세요"
        class="input_text"
        maxlength="16"
      />
      <h4></h4>
    </div>
  );
};

export default Createclassinfo;
