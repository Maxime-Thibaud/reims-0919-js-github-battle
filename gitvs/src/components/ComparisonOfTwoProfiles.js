/* eslint-disable react/destructuring-assignment */

import React from 'react'
import Comparison from './Comparison'
import DisplayChosenProfile1 from './DisplayChosenProfile1'
import DisplayChosenProfile2 from './DisplayChosenProfile2'

function ComparisonOfTwoProfiles(props) {
  return (
    <div>
      <div id="chosenProfile1-comparison-chosenProfile2">
        <DisplayChosenProfile1
          firstAvatar_Url={props.location.state.firstAvatar_Url}
          firstUsername={props.location.state.firstUsername}
          firstUserLocation={props.location.state.firstUserLocation}
          firstUserLanguage={props.location.state.firstUserLanguage}
        />
        <Comparison
          firstAvatar_Url={props.location.state.firstAvatar_Url}
          secondAvatar_Url={props.location.state.secondAvatar_Url}
          firstUserRepos={props.location.state.firstUserRepos}
          secondUserRepos={props.location.state.secondUserRepos}
          firstUserFollowers={props.location.state.firstUserFollowers}
          secondUserFollowers={props.location.state.secondUserFollowers}
        />
        <DisplayChosenProfile2
          secondAvatar_Url={props.location.state.secondAvatar_Url}
          secondUsername={props.location.state.secondUsername}
          secondUserLocation={props.location.state.secondUserLocation}
          secondUserLanguage={props.location.state.secondUserLanguage}
        />
      </div>
    </div>
  )
}

export default ComparisonOfTwoProfiles
