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


export default function Redeem() {
    return (<>
    <StudentNavBar />
    <div className=" grid grid-flow-col">
    <Card>
        <CardHeader>
            <CardTitle>Redeem Reward</CardTitle>
            <CardDescription>Let's use your point to buy something!</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-col-4">
            <Card className="grid-flow-col">
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
            <Card className="grid-flow-col">
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
            <Card className="grid-flow-col">
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
            </div>
        </CardContent>
    </Card>
    </div>
    </>)
}