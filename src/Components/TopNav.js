import React from 'react'

export default function TopNav({ changeTabsOpened, setPrivateMode }) {

    function DeleteAll() {
        changeTabsOpened([]);
    }

    return (
        <nav className="nav-main">
            <span className="material-icons">account_circle</span>
            <span className="tab-nav active" onClick={()=>setPrivateMode(false)}>Tabs</span>
            <span className="tab-nav" onClick={()=>setPrivateMode(true)}>InPrivate</span>
            <span className="material-icons bars" onClick={DeleteAll}>delete_outline</span>
        </nav>
    )
}
