/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {clickEmojisLIst: [], isPlayInPrgress: true, topScore: 0}

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newScore = topScore

    if (currentScore > topScore) {
      newScore = currentScore
    }
    this.setState({topScore: newScore, isPlayInPrgress: false})
  }

  getRandomEmojis = id => {
    const {emojisList} = this.props
    const {clickEmojisLIst} = this.state
    const isIncludes = clickEmojisLIst.includes(id)
    const clickEmojisLIstLength = clickEmojisLIst.length

    if (isIncludes) {
      this.finishGameAndSetTopScore(clickEmojisLIstLength)
    } else {
      if (emojisList.length - 1 === clickEmojisLIstLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickEmojisLIst: [...prevState.clickEmojisLIst, id],
      }))
    }
  }

  getShuhffledEmojs = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  getRandomEmojisList = () => {
    const shuffledEmojisList = this.getShuhffledEmojs()

    return (
      <ul className="emojis-container">
        {shuffledEmojisList.map(each => (
          <EmojiCard
            details={each}
            key={each.id}
            onClickEmoji={this.getRandomEmojis}
          />
        ))}
      </ul>
    )
  }

  resetGame = () => {
    this.setState({clickEmojisLIst: [], isPlayInPrgress: true})
  }

  scoreCard = () => {
    const {clickEmojisLIst} = this.state
    const {emojisList} = this.props

    const isWin = clickEmojisLIst.length === emojisList.length

    return (
      <WinOrLoseCard
        isWinTrue={isWin}
        onclickReset={this.resetGame}
        score={clickEmojisLIst.length}
      />
    )
  }

  render() {
    const {clickEmojisLIst, isPlayInPrgress, topScore} = this.state

    return (
      <div className="bg-container">
        <NavBar
          score={clickEmojisLIst.length}
          topScore={topScore}
          playInprogress={isPlayInPrgress}
        />
        <div className="content-container">
          {isPlayInPrgress ? this.getRandomEmojisList() : this.scoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
