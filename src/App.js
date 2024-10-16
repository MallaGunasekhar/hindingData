import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {searchedtext: '', userDetailsList: initialUserDetailsList}
  typedText = event => {
    this.setState({searchedtext: event.target.value})
  }
  deleteCon = (uniqueNo) => {
    this.setState()
  }
  render() {
    const {searchedtext} = this.state
    const filteredList = userDetailsList.filter(eachCon =>
      eachCon.name.includes(searchedtext),
    )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input type="search" onChange={this.typedText} />
        <ul className="list-container">
          {filteredList.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteCon}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
