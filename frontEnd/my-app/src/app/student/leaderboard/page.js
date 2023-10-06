import React from 'react'
import { StudentNavBar } from '../comps/studentNavBar'
import LeaderboardTable from '../comps/leaderboardtable'

const LeaderBoard = () => {
  return (
    <>
    <StudentNavBar />
    <div>
      <LeaderboardTable /> 
    </div>
    </>
  )
}

export default LeaderBoard