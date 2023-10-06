import * as React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
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
                <CardDescription>Complete 30 daily challenges in a streak</CardDescription>
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
                <CardTitle>SUPERMAN</CardTitle>
                <CardDescription>Complete 300 daily challenges in a streak</CardDescription>
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
                <CardTitle>ULTRAMAN</CardTitle>
                <CardDescription>Complete 1000 daily challenges</CardDescription>
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
                <CardTitle>MONEY KEEPER</CardTitle>
                <CardDescription>Create a time deposit</CardDescription>
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
                <CardTitle>KEPT THE GOLD</CardTitle>
                <CardDescription>Complete the time deposit</CardDescription>
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
                <CardTitle>FRIENDS ACQUIRED</CardTitle>
                <CardDescription>Participate one offline event</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
        </div>
    )
}