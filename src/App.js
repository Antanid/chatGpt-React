import { useState } from "react";
import axios from "axios";
import "./App.css";
import Search from "./сomponent/Search/Search";
import Response from "./сomponent/ResponseText/Response";
import ImgFace from "./сomponent/ImgFace/ImgFace";
import chatFace from "./img/chatGptFace.png";
import GptIcon from "./img/chatGPT.png";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeInput = (e) => {
    setPrompt(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("http://localhost:5555/chat", { prompt })
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <ImgFace chatFace={chatFace} />
      <Search
        GptIcon={GptIcon}
        prompt={prompt}
        onChangeInput={onChangeInput}
        handleSubmit={handleSubmit}
        loading={loading}
      />
      <Response loading={loading} response={response} />
    </div>
  );
}

export default App;
