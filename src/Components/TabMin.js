import "./TabMin.css";

export default function TabMin({ tabShown, showTab }) {

    function ShowNewTab() {
        showTab(true);
    }

    return (
        <>
            <div className="card" onClick={ShowNewTab}>
                <div>
                    <span>New Tab</span>
                    <span className="material-icons">close</span>
                </div>
            </div>
        </>
    );
}