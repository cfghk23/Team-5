import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ProfileCard from "../comps/profile-card";
import { StudentNavBar } from "../comps/studentNavBar";
import Image from "next/image";
import  Link  from "next/link";

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
            <div className="grid grid-cols-2 grid-rows-2 grid-flow-row grid-flow-col">
            <Card>
                <CardHeader>
                    <CardTitle>Skin: M-2 Hat Avator</CardTitle>
                    <CardDescription>Required: 1000 stars</CardDescription>
                    <Image src="/student/redeem/cap.png" width={200} height={200} />
                    <Button asChild>
                        <Link href="" className="">Redeem</Link>
                    </Button>
                </CardHeader>

            </Card>
            <Card>
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
            <Card>
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
            <Card>
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