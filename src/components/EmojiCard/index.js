// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {details, onClickEmoji} = props
  const {id, emojiUrl, emojiName} = details

  const changeRandomEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li className="list">
      <button type="button" className="container" onClick={changeRandomEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
