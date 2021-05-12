function DisplayChar(props) {
    return (   
    <div className="DisplayChar">
        <p>Name: {props.name}</p>
        <p>Height: {props.height}</p>
        <p>Hair: {props.hair}</p>
        <p>Eyes: {props.eyes}</p>
        <p>Birth: {props.birth}</p>
        <p>Gender: {props.gender}</p>
    </div>
    )
}


export default DisplayChar