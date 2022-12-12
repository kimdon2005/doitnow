import Header from "../../../components/Navigation/Index";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div>
      <Header title="비밀번호 재설정" />

      <div className="renderTarget"></div>
className
      <div className="content" >
        {" "}
      </div>
      <div className="content_header"></div>

      <p className="content_summary">
        비밀번호를 찾고자 하는 아이디를 입력해 주세요.
      </p>

      <div className="section section_find">
        <div className="box6">
          <div className="divUserId">
            <label className="lbUserId" for="userId">
              아이디
            </label>
            <input
              type="text"
              id="userId"
              name="userId"
              onFocus="convertDiv('lbUserId', 'divUserId', 'userId', 'none')"
              onBlur="convertDiv('lbUserId', 'divUserId', 'userId', 'block')"
              maxlength="40"
              value=""
              title="아이디"
              class="input_txt"
            />
          </div>
        </div>
      </div>

      <div class="find_dsc">
        <h3>
          아이디가 기억나지 않는다면?{" "}
          <a
            href="#"
            onclick="idInquiry();clickcr(this,'ihl.forgotid','','',event);"
          >
            아이디 찾기<em class="ico_arr2"></em>
          </a>
        </h3>
      </div>
    </div>
  
  );
};

export default ForgotPassword;
