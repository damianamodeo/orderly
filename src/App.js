import Nav from "./component/nav";
import Header from "./component/header";
import Content from "./component/content";

import "./css/publisher-add.css";
import "./css/publisher-list.css";
import "./css/publisher-details.css";
import "./css/content.css";
import "./css/nav.css";
import "./css/header.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Content></Content>
    </div>
  );
}

export default App;
