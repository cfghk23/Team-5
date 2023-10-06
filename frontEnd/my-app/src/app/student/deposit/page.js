import DepositCalculator from "../comps/DepositCalculator"
import { StudentNavBar } from "../comps/studentNavBar"

const DepositPage = () => {
    return (
    <>
    <StudentNavBar />
     <div>
        <DepositCalculator />
     </div>
     </>
    )
}

export default DepositPage