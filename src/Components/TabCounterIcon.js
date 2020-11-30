import "./TabCounterIcon.css";

export default function TabCounterIcon({ tabsOpened }) {
    return (
        <span className="counter">
            <span>{tabsOpened.length}</span>
        </span>
    );
}