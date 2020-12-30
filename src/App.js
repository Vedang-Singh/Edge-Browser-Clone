import './App.css';
import TabList from "./Components/TabList";
import { useState, useEffect } from "react";
import { v4 as uuid_v4 } from "uuid";
import Tab from './Components/Tab';
import TopNav from "./Components/TopNav";

function App() {

  const [tabShown, showTab] = useState(false);
  const [tabsOpened, changeTabsOpened] = useState([]);
  const [imageOfTheDayUrl, setImageOfTheDayUrl] = useState("");
  const [isPrivateMode, setPrivateMode] = useState(false);

  useEffect(() => {
    if (isPrivateMode) {
      document.querySelector(".nav-main").style.background = "#222";
      document.querySelector(".nav-main").style.color = "#aaa";
      document.body.style.background = "#000";
      document.querySelectorAll(".tab-nav")[0].classList.remove("active");
      document.querySelectorAll(".tab-nav")[1].classList.add("active");
    }
    else {
      document.querySelector(".nav-main").style.background = "#fff";
      document.body.style.background = "#c9c9c9";
      document.querySelectorAll(".tab-nav")[1].classList.remove("active");
      document.querySelectorAll(".tab-nav")[0].classList.add("active");
      document.querySelector(".nav-main").style.color = "#555";
    }
    
  },[isPrivateMode]);

  useEffect(() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US";
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(data => setImageOfTheDayUrl(data.images[0].url));
  }, []);

  function AddNewTab() {

    let tempObj = {
      id: uuid_v4()
    };

    changeTabsOpened(
      i => [tempObj, ...i]
    );
  }

  function deleteTab(id) {
    let tempArr = [];
    for (let i of tabsOpened) {
      if (i.id !== id) tempArr.push(i);
    }
    changeTabsOpened(tempArr);
  }

  return (
    <>
      <TopNav changeTabsOpened={changeTabsOpened} setPrivateMode={setPrivateMode} />
      <div className="app-main">
        <div className="addNewBtn" onClick={AddNewTab}>
          <span className="material-icons" style={{ fontSize: "35px" }}>add</span>
        </div>
        <TabList imageOfTheDayUrl={imageOfTheDayUrl} deleteTab={deleteTab} tabShown={tabShown} showTab={showTab} tabArr={tabsOpened} />
      </div>
      <Tab tabsOpened={tabsOpened} imageOfTheDayUrl={imageOfTheDayUrl} shown={tabShown} showTab={showTab} />
    </>
  );
}

export default App;
