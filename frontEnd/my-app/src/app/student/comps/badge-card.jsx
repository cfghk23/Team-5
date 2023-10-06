import * as React from "react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
export function badgeCard(){
    return (
        <div>
            <h1>Current Badges (0/100 unlocked) </h1>
        <Card>
            <CardHeader>
                <CardTitle>Fireman</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Complete 30 daily challenges in a streak</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>SUPERMAN</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Complete 300 daily challenges in a streak</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>ULTRAMAN</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Complete 1000 daily challenges</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>MONEY KEEPER</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Create a time deposit</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>KEPT THE GOLD</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Complete the time deposit</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>FRIENDS ACQUIRED</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Participate one offline event</p>
            </CardContent>
        </Card>
        </div>
    )
}