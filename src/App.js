import Dycto from "./Dycto";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src="/images/violet-logo.png" alt="dycto-logo" />
        <hr />
      </header>
      <main className="m-3">
        <Dycto defaultWord="moonlight" />
      </main>

      <footer className="text-center mt-3">
        <p>
          This project was coded by Mehtap Tataroğlu and is open-sourced on{" "}
          <a
            href="https://github.com/teytap/dycto"
            target="_blank"
            rel="noreferrer"
            className="attribution"
          >
            Github{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://kaleidoscopic-entremet-756dab.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="attribution"
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
