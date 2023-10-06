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
        <CardHeader>
            <CardTitle>Current Point: 1000000</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-2 grid-rows-2 grid-flow-row grid-flow-col">
            <Card>
                <CardHeader>
                    <CardTitle>Skin: M-2 Hat Avator</CardTitle>
                    <CardDescription>Required: 1000 stars</CardDescription>
                    <Image src="https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SEFUfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" width={200} height={200} />
                    <Button asChild>
                        <Link href="" className="">Redeem</Link>
                    </Button>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Skin: M-2 T-shirt Avatorr</CardTitle>
                    <CardDescription>Required: 1000 stars</CardDescription>
                    <Image src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" width={200} height={200} />
                    <Button asChild>
                        <Link href="" className="">Redeem</Link>
                    </Button>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>M-2 Annual Ceremony Ticket</CardTitle>
                    <CardDescription>Required: 3000 stars</CardDescription>
                    <Image src="https://images.unsplash.com/photo-1578575436955-ef29da568c6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGlja2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" width={200} height={200} />
                    <Button asChild>
                        <Link href="" className="">Redeem</Link>
                    </Button>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>McDonald's $10 coupon</CardTitle>
                    <CardDescription>Required: 10000 stars</CardDescription>
                    <Image src="https://images.unsplash.com/photo-1617992477211-dfab5866182b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWNEb25hbHMncyUyMGNvdXBvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" width={200} height={200} />
                    <Button asChild>
                        <Link href="" className="">Redeem</Link>
                    </Button>
                </CardHeader>
            </Card>
            </div>
        </CardContent>
    </Card>
    </div>
    </>)
}