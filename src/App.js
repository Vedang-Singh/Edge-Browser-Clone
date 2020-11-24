import './App.css';
import TabList from "./Components/TabList";
import { useState } from "react";
import { v4 as uuid_v4 } from "uuid";
import Tab from './Components/Tab';

function App() {

  const [tabShown, showTab] = useState(false);

  function AddNewTab() {

    let tempObj = {
      id: uuid_v4()
    };

    addNewTab(
      i => [tempObj, ...i]
    );
  }

  function DeleteAll() {
    addNewTab([]);
  }

  const [tabsOpened, addNewTab] = useState([]);

  return (
    <>
      <nav className="nav-main">
        <span className="material-icons">account_circle</span>
        <span className="tab-nav active">Tabs</span>
        <span className="tab-nav">InPrivate</span>
        <span className="material-icons bars" onClick={DeleteAll}>delete_outline</span>
      </nav>
      <div className="app-main">
        <div className="addNewBtn" onClick={AddNewTab}>
          <span className="material-icons" style={{ fontSize: "35px" }}>add</span>
        </div>
        <TabList tabShown={tabShown} showTab={showTab} tabArr={tabsOpened} />
      </div>
      <Tab shown={tabShown} showTab={showTab} />
    </>
  );
}

export default App;
