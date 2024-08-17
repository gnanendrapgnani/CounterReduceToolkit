import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrivacyMsg from "./components/PrivayMsg";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Container>
          <Header />
          <div className="col-lg-6 mx-auto">
            {privacy ? <PrivacyMsg /> : <DisplayCounter />}
            <Controls />
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
