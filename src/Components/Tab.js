import Shortcuts from './Shortcuts';
import './Tab.css';
import { useEffect, useState } from 'react';

export default function Tab({ imageOfTheDayUrl, shown = false, showTab }) {

    function back() {
        showTab(false);
    }

    useEffect(()=>{
        document.querySelector("#imgBg").style.backgroundImage = "url(https://www.bing.com"+ imageOfTheDayUrl +")";
    }, [imageOfTheDayUrl])

    useEffect(() => {
        let tab = document.querySelector('#tab');
        if (shown) tab.style.display = "block";
        else tab.style.display = "none";
    }, [shown]);

    const [dataShortcuts, setDataShortcuts] = useState([]);

    useEffect(
        () => {
            fetch("./Data/shortcuts.json")
                .then((response) => response.json())
                .then((data) => (setDataShortcuts(data)));
        }, []
    );

    return (
        <>
            <div id="tab">
                <nav className="nav-tab">
                    <span className="material-icons">account_circle</span>
                    <span className="material-icons bars">menu</span>
                </nav>
                <main>
                    <section id="imgBg" className="imgbg"></section>
                    <div className="ctntmain">
                        <input placeholder="Search or enter web address" />
                        <span className="material-icons-outlined srchico">photo_camera</span>
                        <span className="material-icons srchico right">mic_none</span>
                    </div>
                    <section className="shortcuts">
                        <div className="shmain">
                            <Shortcuts items={dataShortcuts}></Shortcuts>
                        </div>
                        <p className="newsAndMore"><span className="material-icons">expand_more</span> News and More</p>
                    </section>
                </main>
                <div className="bottomBar">
                    <span className="material-icons">navigate_before</span>
                    <span className="material-icons">navigate_next</span>
                    <span className="material-icons options">more_horiz</span>
                    <span className="material-icons-outlined" onClick={back}>looks_one</span>
                    <span className="material-icons-outlined">share</span>
                </div>
            </div >
        </>
    );
}