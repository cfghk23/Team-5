import { StudentNavBar } from "./comps/studentNavBar";
import {BadgeCard} from "./comps/badge-card";
import {DailyChallenge} from "./comps/daily-challenges";

export default function Student() {
    return (
        <div>
            <StudentNavBar/>
            <DailyChallenge/>
            {/* <BadgeCard/> */}
        </div>
        
    )
}