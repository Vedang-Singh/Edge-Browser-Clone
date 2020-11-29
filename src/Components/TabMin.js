import "./TabMin.css";
import { useEffect } from 'react';

export default function TabMin({imageOfTheDayUrl, tabShown, showTab, tabId, deleteTab }) {

    
    function ShowNewTab() {
        showTab(true);
    }

    useEffect(()=>{
        document.querySelector("#card").style.backgroundImage = "url(https://www.bing.com"+ imageOfTheDayUrl +")";
    }, [imageOfTheDayUrl]);

    function Delete(e){

        // To avoid parent click event to be called
        e.stopPropagation();

        deleteTab(e.target.dataset.tid);
    }

    return (
        <>
            <div id="card" className="card" onClick={ShowNewTab}>
                <div>
                    <span>New Tab</span>
                    <span data-tid={tabId.toString()} className="material-icons" onClick={Delete}>close</span>
                </div>
            </div>
        </>
    );
}