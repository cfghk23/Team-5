import * as React from "react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";
  
export default function BadgeCard(){
    return (
        <div>
            <h1>Current Badges (0/100 unlocked) </h1>
            <div className="flex">
            <Card className="w-[380px]">
            <CardHeader>
                
            <Image src="" height={100} width={100}/>
                <CardTitle>Fireman</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <p>Complete 30 daily challenges in a streak</p>
            </CardContent>
        </Card>
        <Card className="w-[380px]">
            <CardHeader>
                <CardTitle>SUPERMAN</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <p>Complete 300 daily challenges in a streak</p>
            </CardContent>
        </Card>
        <Card className="w-[380px]">
            <CardHeader>
                <CardTitle>ULTRAMAN</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <p>Complete 1000 daily challenges</p>
            </CardContent>
        </Card>
        <Card className="w-[380px]">
            <CardHeader>
                <CardTitle>MONEY KEEPER</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <p>Create a time deposit</p>
            </CardContent>
        </Card>
        <Card className="w-[380px]">
            <CardHeader>
                <CardTitle>KEPT THE GOLD</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <p>Complete the time deposit</p>
            </CardContent>
        </Card>
        <Card className="w-[380px]">
            <CardHeader>
                <CardTitle>FRIENDS ACQUIRED</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <p>Participate one offline event</p>
            </CardContent>
        </Card>
            </div>
        
        </div>
    )
}