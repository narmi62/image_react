
function Child(props) {
    return (
        <div className="Container">
            <div className="Products">

                <img src={props.img} alt={props.title}></img>
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}
export default Child;