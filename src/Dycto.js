import React, { useState } from "react";
import axios from "axios";
import Definition from "./Definition";
import Photos from "./Photos";

export default function Dycto(props) {
  let [word, setWord] = useState(props.defaultWord);
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function showDefinition(response) {
    setDefinition(response.data[0]);
    console.log(response.data[0]);
  }

  function showPhoto(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(showDefinition);

    let photoApiKey = `563492ad6f91700001000001ee43e0b3e1ec4523a5985d5e047e5351`;
    let photoUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=16`;
    let headers = { Authorization: `Bearer ${photoApiKey}` };
    axios.get(photoUrl, { headers: headers }).then(showPhoto);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit} className="word--form">
          <div className="d-grid col-md-5 mx-auto">
            <label htmlFor="exampleFormControlInput" className="form-label">
              What word do you want to look up?
            </label>
            <input
              type="search"
              className="form-control"
              placeholder="🔍"
              autoFocus="on"
              onChange={handleChange}
              defaultValue={props.defaultWord}
            />
          </div>
        </form>
        <Definition definition={definition} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading....";
  }
}
