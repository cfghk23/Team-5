import React from 'react'
import { StudentNavBar } from '../comps/studentNavBar'
import LeaderboardTable from '../comps/leaderboardtable'

const LeaderBoard = () => {
  return (
    <>
    <StudentNavBar />
    <div className='mx-24 my-12'>
      <LeaderboardTable /> 
    </div>
    </>
  )
}

export default LeaderBoard