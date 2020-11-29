import './App.css';
import TabList from "./Components/TabList";
import { useState, useEffect } from "react";
import { v4 as uuid_v4 } from "uuid";
import Tab from './Components/Tab';

function App() {

  const [tabShown, showTab] = useState(false);
  const [tabsOpened, changeTabsOpened] = useState([]);
  const [ imageOfTheDayUrl, setImageOfTheDayUrl ] = useState("");

  useEffect(()=>{
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US";
    fetch(proxyurl + url)
      .then(response => response.json() )
      .then( data => setImageOfTheDayUrl(data.images[0].url) );
  }, []);

  function AddNewTab() {

    let tempObj = {
      id: uuid_v4()
    };

    changeTabsOpened(
      i => [tempObj, ...i]
    );
  }

  function DeleteAll() {
    changeTabsOpened([]);
  }

  function deleteTab(id){
    let tempArr = [];
    for ( let i of tabsOpened ) {
      if ( i.id !== id ) tempArr.push(i);
    }
    changeTabsOpened( tempArr );
  }

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
        <TabList imageOfTheDayUrl={imageOfTheDayUrl} deleteTab={deleteTab} tabShown={tabShown} showTab={showTab} tabArr={tabsOpened} />
      </div>
      <Tab imageOfTheDayUrl={imageOfTheDayUrl} shown={tabShown} showTab={showTab} />
    </>
  );
}

export default App;
