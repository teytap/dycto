import Dycto from "./Dycto";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <header>
        <img src="/images/violet-logo.png" alt="dycto-logo" />
      </header>
      <main>
        <Dycto defaultWord="moonlight" />
      </main>

      <footer className="text-center mt-4">
        <p>
          This project was coded by Mehtap Tataroğlu and is open-sourced on{" "}
          <a
            href="https://github.com/teytap/dycto"
            target="_blank"
            rel="noreferrer"
            className="attribution"
          >
            <FontAwesomeIcon
              icon={faSquareGithub}
              className="icons fs-4"
            ></FontAwesomeIcon>
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
