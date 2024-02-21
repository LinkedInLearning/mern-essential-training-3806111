import React from 'react'
import './App.css'
import PlayerForm from './Player/PlayerForm'
import PlayerList from './Player/PlayerList'
import PlayerSingle from './Player/PlayerSingle'

class App extends React.Component {
  render () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col s12'>Menu</div>
        </div>
        <div className='row'>
          <div className='col s3'><PlayerList /></div>
          <div className='col s9'><PlayerSingle /></div>
        </div>
        <div className='row'>
          <div className='co s12'><PlayerForm /></div>
        </div>
      </div>
    )
  }
}

export default App
