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
        <div>
            <Balloon>
            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Daily Challenges Question</DialogTitle>
                            <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                            </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            </Balloon>
        </div>
    )
}