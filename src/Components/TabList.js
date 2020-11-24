import TabMin from "./TabMin";

export default function TabList({ tabArr, tabShown, showTab }) {
    return (
        <>
            { tabArr.map(i => (
                <TabMin tabShown={tabShown} showTab={showTab} key={i.id} />
            ))}
        </>
    );
}