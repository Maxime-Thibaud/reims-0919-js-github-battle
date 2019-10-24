/* eslint-disable no-unused-vars */
/* eslint-disable arrow-parens */

import React from 'react'
import './Profile1Phone.css'
import './ProfilesDesktop.css'
import ButtonMask from './ButtonMask'

const Profile1 = () => (
  <div id="Profile1">
    <h5 className="pseudo">Maxime-Thibaud</h5>
    <img className="avatar" src="https://avatars3.githubusercontent.com/u/54673312?v=4" alt="avatar user one" />
    <div className="userInfo">
      <p>Public repos: 9</p>
      <p>Public gist: 11</p>
      <p>Location: Reims</p>
      <button type="button" value="Mask" onClick={event => ButtonMask('Profile1', 'ChooseTheProfile2')} className="buttonPhone"> Ready </button>
      <button className="buttonReadyDesktop" type="button" value="Mask" onClick={event => ButtonMask('Profile1', 'ChooseTheProfile2')}>Ready</button>
    </div>
  </div>
)

export default Profile1
