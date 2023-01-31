import Dycto from "./Dycto";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareGithub,
  faSquareInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <header>
        <img src="/images/violet-logo.png" alt="dycto-logo" />
        <hr />
      </header>
      <main>
        <Dycto defaultWord="moonlight" />
      </main>

      <footer className="text-center">
        <FontAwesomeIcon icon={faCoffee} className="icons"></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faSquareFacebook}
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
        <FontAwesomeIcon
          icon={faSquareGithub}
          className="icons"
        ></FontAwesomeIcon>
        <p>
          This project was coded by Mehtap Tataroğlu and is open-sourced on{" "}
          <a
            href="https://github.com/teytap/dycto"
            target="_blank"
            rel="noreferrer"
          >
            Github{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://kaleidoscopic-entremet-756dab.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
