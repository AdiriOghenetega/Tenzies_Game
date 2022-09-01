export default function StartPage(props){
    return (
        <div className="start-page">
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <button className="start-button" onClick={props.start} >START GAME</button>
        </div>
    )
}