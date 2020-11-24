export default function Shortcuts({ items }) {

    const loaderStyle = {
        background: "transparent",
        height: "275px"
    }

    return (
        <>
            { items.length <= 0 &&
                <div>
                    <img style={loaderStyle} src="./Assets/loading.gif" alt="loader" />
                </div>
            }
            {items.map(
                (item, key) => (
                    <div key={key}>
                        <img alt="icon/logo" src={item.imgUrl} className={item.transparentBg ? 'nobg' : ''} />
                        <div> {item.label} </div>
                    </div>
                )
            )}
        </>
    );
}