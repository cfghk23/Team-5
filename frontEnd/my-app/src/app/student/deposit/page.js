import DepositCalculator from "../comps/DepositCalculator"
import { StudentNavBar } from "../comps/studentNavBar"

const DepositPage = () => {
    return (
    <>
    <StudentNavBar />
     <div>
        <div>Section 1</div>
        <DepositCalculator />
     </div>
     </>
    )
}

export default DepositPage