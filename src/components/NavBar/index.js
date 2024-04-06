// Write your code here.

import './index.css'

const NavBar = props => {
  const {score, playInprogress, topScore} = props

  return (
    <div className="nav-container">
      <div className="nav-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="logo-title">Emoji Game</h1>
      </div>
      {playInprogress && (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
