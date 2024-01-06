// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, selectedOne} = props
  const {id, suggestion} = suggestionDetails
  const onAddToSearch = () => {
    selectedOne(id)
  }
  return (
    <div className="suggestion-container">
      <p className="suggestion-item">{suggestion}</p>
      <button className="button1" type="button" onClick={onAddToSearch}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-pic"
          alt="arrow-pic"
        />
      </button>
    </div>
  )
}

export default SuggestionItem
