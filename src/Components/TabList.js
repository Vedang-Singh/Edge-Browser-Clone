import TabMin from "./TabMin";

export default function TabList({imageOfTheDayUrl, tabArr, tabShown, showTab, deleteTab }) {
    return (
        <>
            { tabArr.map(i => (
                <TabMin imageOfTheDayUrl={imageOfTheDayUrl} deleteTab={deleteTab} tabShown={tabShown} showTab={showTab} key={i.id} tabId={i.id} />
            ))}
        </>
    );
}