import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import ProfileCard from "../comps/profile-card";
import { StudentNavBar } from "../comps/studentNavBar";

export default function Profile() {
    return (<>
    <StudentNavBar />
    <div className=" grid grid-flow-col">
        <ProfileCard className= ""/>
        <Card className= "flex-col">
        <CardHeader>
            <CardTitle>My M2 journey</CardTitle>
            <CardDescription>Know your progress!</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-2 grid-rows-2 grid-flow-row grid-flow-col">
            <Card>
                <CardHeader>
                    <CardTitle>Module in Progress :1</CardTitle>
                </CardHeader>
                <CardContent>
                    <li>Financial budgeting 101</li>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Module Completed: 9</CardTitle>
                </CardHeader>
                <CardContent>
                    <li>What is time deposits?</li>
                    <li>Wish and Needs</li>
                    <li>What is interest?</li>
                    <li>What is the opportunity cost?</li>
                    <li>...</li>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Ranking</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>In-class Ranking: xxx</p>
                    <p>School Ranking: </p>
                    <p>Hong Kong Ranking: </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-slate-600">[9/10/2023] </p>
                    <p>Kahoot Competition</p>
                </CardContent>
            </Card>
            </div>
        </CardContent>
        </Card>
    </div>
    </>)
}