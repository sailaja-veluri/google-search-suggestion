// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem/index'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
    // usersDetailsList: initialUserDetailsList
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  selectedOne = id => {
    const {suggestionsList} = this.props
    const filteredData = suggestionsList.filter(each => each.id === id)
    this.setState({
      searchInput: filteredData.suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachOne =>
      eachOne.suggestion.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-img"
          />
          <div className="search-container">
            <div className="search-tab-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-img"
              />
              <input
                type="search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
                placeholder="Search Google"
                className="input-ele"
              />
            </div>
            <ul className="list-container">
              {searchResults.map(eachOne => (
                <SuggestionItem
                  suggestionDetails={eachOne}
                  key={eachOne.id}
                  selectedOne={this.selectedOne}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
