import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import './progressBar.css'


// const commit1= 
// const commit2= 5675

// const commitotal = (commit1 + commit2)
// const commitPercent = (commit1 / commitotal) * 100
// export const percentDecimal = Math.round(commitPercent * 1) / 1
// export const percentSecondUser = Math.round((100 - commitPercent) * 1) / 1


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})

function LinearDeterminate(props) {
  const commit1= props.firstUserRepos
  const commit2= props.secondUserRepos
  const commitotal = (commit1 + commit2)
  const commitPercent = (commit1 / commitotal) * 100
  const percentDecimal = Math.round(commitPercent * 1) / 1
  const percentSecondUser = Math.round((100 - commitPercent) * 1) / 1

  console.log(props.SecondUserRepos)
  const classes = useStyles()
  const [completed, setCompleted] = React.useState(0)

  React.useEffect(() => {
    function progress() {
      setCompleted((oldCompleted) => {
        if (oldCompleted === 10) {
          return 10
        }
        const diff = Math.random() * 10
        return Math.min(oldCompleted + diff, percentDecimal)
      })
    }

    const timer = setInterval(progress, 100)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className={classes.root}>
      <div>
        <div className="commitBar">
          <p className="firstUserResult">
            {percentDecimal}
%
          </p>
          <p>/</p>
          <p className="secondUserResult">
            {percentSecondUser}
%
          </p>
        </div>
          
            <LinearProgress id="progressBar" variant="determinate" value={completed} />
          
      </div>
      <br />


    </div>
  )
}

export default LinearDeterminate
