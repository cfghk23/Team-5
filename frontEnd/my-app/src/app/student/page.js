import { StudentNavBar } from "./comps/studentNavBar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Course } from "./comps/course";
import { RecentActivity } from "./comps/recent-activity";



export default function Student() {
    const courses = [{
        name: "Financial Budgeting 101",
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2730&q=80",
    }];


    return (
        <>
            <StudentNavBar />
            <div className="grid grid-cols-2">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-2xl font-medium">
                            Challenge Question of the day
                        </CardTitle>

                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-row">

                            <div className="text-l font-bold">balloon popping</div>
                            <Button className="ml-auto">Try</Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-2xl font-medium">
                            Notification from teacher
                        </CardTitle>

                    </CardHeader>
                    <CardContent>
                        <div className="text-l font-bold">Kahoot competition next week</div>
                        <p className="text-xs text-muted-foreground">
                            9/10/2023
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Separator className="my-4" />



            {/* create a horizontal line */}



            {/* allow horizontal scrolling when too much item */}
            <div className="grid grid-cols-2 items-center ">

                <Card>

                    <CardHeader>
                        <CardTitle>Continue your lesson</CardTitle>
                    </CardHeader>
                    {/* <p className="text-sm text-muted-foreground">
                    School ABC
                </p> */}

                    <CardContent className="ml-2">
                        <ScrollArea className="col-span-1" >
                            <div className=" space-x-4 pb-4">
                                {courses.map((course) => (
                                    <Course
                                        key={course.name}
                                        course={course}
                                        className="w-[250px]"
                                        aspectRatio="portrait"
                                        width={250}
                                        height={330}
                                    />
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </CardContent>
                </Card>

                {/* notification board */}
                <Card className="col-span-1 h-full">
                    <CardHeader>
                        <CardTitle>Recents </CardTitle>
                        <CardDescription>
                            Recent activity of your classmates
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RecentActivity />
                    </CardContent>
                </Card>

            </div>

        </>
    )
}