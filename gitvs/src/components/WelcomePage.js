/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Component } from 'react'
import './Profile1Phone.css'
import './ProfilesDesktop.css'
import GetProfile from './GetProfile'

class WelcomePage extends Component {
  constructor() {
    super()
    this.state = {
      username: null,
      location: null,
      avatar_url: null,
      public_repos: null,
      isCardIsVisible: false,
      isNewPageIsVisible: true,
    }
  }

  getUser(username) {
    return fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(response => {
      return response;
    })
  }

  cardAppear() {
    this.setState({ isCardIsVisible: true })
  }

  pageAppear() {
    this.setState({ isNewPageIsVisible: !this.state.isNewPageIsVisible })
  }


  async handleSubmit(e) {
    e.preventDefault()
    const user = await this.getUser(this.refs.username.value);
    this.setState({
      username: user.login,
      avatar_url: user.avatar_url,
      location: user.location,
      public_repos: user.public_repos,
    })
    this.cardAppear()
  }

  async buttonSubmit(e) {
    e.preventDefault()
    const user = await this.getUser(this.refs.username.value)
    this.setState({ 
      username: user.login,
      avatar_url: user.avatar_url,
      location: user.location,
      public_repos: user.public_repos,
    })
    this.cardAppear()
  }

  render() {
    return (
      <div>
        <div id="WelcomePage">
          <h1>Welcome to Git Versus</h1>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input ref={"username"} type="text" placeholder="username" />
            <button type="button" onClick={e => this.buttonSubmit(e)}>Search</button>
          </form>
          <div id={this.state.isCardIsVisible ? 'ProfileOn' : 'ProfileOff'}>
            <GetProfile
              username={this.state.username}
              avatar_url={this.state.avatar_url}
              public_repos={this.state.public_repos}
              location={this.state.location}
              weapons="JavaScript"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default WelcomePage
