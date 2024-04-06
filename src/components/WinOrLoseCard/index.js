// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWinTrue, onclickReset, score} = props

  const imgUrl = isWinTrue
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const scoreLabel = isWinTrue ? 'Best Score' : 'Score'
  const result = isWinTrue ? 'You Won' : 'You Lose'

  return (
    <div className="card-container">
      <img src={imgUrl} alt="win or lose" className="win-img" />
      <div className="content">
        <h1 className="result">{result}</h1>
        <p className="label">{scoreLabel}</p>
        <p className="card-score">{score}/12</p>
        <button className="button" type="button" onClick={onclickReset}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
