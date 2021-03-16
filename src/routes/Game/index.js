const GamePage = ({ onReturn }) => {
    const handleClick = () => {
        onReturn && onReturn('home')
    }
    return (
        <div>
            <h1>This is a Game page</h1>
            <button onClick={ handleClick }>
                return to Home page
            </button>
        </div>
    )
}

export default GamePage