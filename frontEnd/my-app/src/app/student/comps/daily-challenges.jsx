import * as React from "react"
import Balloon from "../../assets/balloon.jpg";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

export default function DailyChallenge(){
    return (
        <div class="flex">
            <Balloon>
            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Daily Challenges Question</DialogTitle>
                            <DialogDescription>
                            first question
                            </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            </Balloon>
            <Balloon>
            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Daily Challenges Question</DialogTitle>
                            <DialogDescription>
                            second question
                            </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            </Balloon>
            <Balloon>
            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Daily Challenges Question</DialogTitle>
                            <DialogDescription>
                            Third question
                            </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            </Balloon>
            <Balloon>
            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Daily Challenges Question</DialogTitle>
                            <DialogDescription>
                            fourth question
                            </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            </Balloon>
        </div>
    )
}