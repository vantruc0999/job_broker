// import "./App.css";
import "./static/style.css";
import "./static/cssAdmin.css";
import "./static/cssCandidate/bootstrap.min.css";
import "./static/vendor/bootstrap/css/bootstrap.min.css";
import "./static/cssCandidate/style.css";
import LoginCan from "./tempalate/LoginCan";
import LoginRecuiter from "./tempalate/LoginRecruiter";
import RegisterRecruiter from "./tempalate/RegisterRecruiter";
import RegisterCan from "./tempalate/RegisterCan";
import LoginAdmin from "./tempalate/LoginAdmin";

function App() {
  return (
    <div>
      <LoginRecuiter></LoginRecuiter>
      <RegisterRecruiter></RegisterRecruiter>
      <LoginCan></LoginCan>
      <RegisterCan></RegisterCan>
      <LoginAdmin></LoginAdmin>
    </div>
  );
}

export default App;
