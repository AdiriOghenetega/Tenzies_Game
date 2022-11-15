export default function Lost(props){
    return (
        <div className="lost">
        <h1>YOU LOST ...</h1><img src="/images/smile.ico" />
        <div className="lost-buttons"><button onClick={props.handleTryAgain} className="lost-btn" >TRY AGAIN</button>
        <button onClick={props.end} className="endgame-btn" >END GAME</button></div>
        </div>
    )
}