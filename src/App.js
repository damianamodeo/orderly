import Nav from "./component/nav";
import Header from "./component/header";
import Content from "./component/content";

import "./css/publisher-add.css";
import "./css/publisher-list.css";
import "./css/content.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Content></Content>
    </div>
  );
}

export default App;
