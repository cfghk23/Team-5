import DepositCalculator from "../comps/DepositCalculator"
import { StudentNavBar } from "../comps/studentNavBar"

const DepositPage = () => {
    return (
    <>
    <StudentNavBar />
     <div className='grid grid-cols-2 gap-4'>
        <div><p>Card</p></div>
        <div><DepositCalculator /></div>
     </div>
     </>
    )
}

export default DepositPage