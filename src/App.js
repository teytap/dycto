import Dycto from "./Dycto";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareGithub,
  faSquareInstagram,
  faSquareTwitter,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <form className="form">
        <div className="d-grid col-md-5 mx-auto">
          <label for="exampleFormControlInput" className="form-label">
            Make your vacabulary more colorful.
          </label>
          <input
            type="search"
            className="form-control"
            placeholder="🔍"
            autoFocus="on"
          />
        </div>
      </form>
      <FontAwesomeIcon icon={faCoffee} className="icons"></FontAwesomeIcon>
      <FontAwesomeIcon
        icon={faSquareFacebook}
        className="icons"
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        icon={faSquareGithub}
        className="icons"
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        icon={faSquareInstagram}
        className="icons"
      ></FontAwesomeIcon>
      <FontAwesomeIcon
        icon={faSquareTwitter}
        className="icons"
      ></FontAwesomeIcon>
      <Dycto />
    </div>
  );
}

export default App;
