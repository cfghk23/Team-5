import DepositCalculator from "../comps/DepositCalculator"
import ProfileCard from "../comps/profile-card"
import { StudentNavBar } from "../comps/studentNavBar"



const DepositPage = () => {
    return (
        <>
            <StudentNavBar />


            <div className='grid grid-cols-2 gap-4'>
                <ProfileCard />

                <DepositCalculator />

            </div>
        </>
    )
}

export default DepositPage