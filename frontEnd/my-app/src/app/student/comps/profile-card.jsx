import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
// import { useEffect } from "react";
import axios from "axios";

export default function ProfileCard() {
  const getStudent = async () => {
    const students = await axios.get("localhost:3000/api/student");
  };

  const data = student[0];

  //   const data = {
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1592188657297-c6473609e988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  //     userId: 111,
  //     name: "student A",
  //     class: "1A",
  //     starsBanked: 100,
  //   };
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-medium">
          <Image
            className="rounded-full "
            width="300"
            height="300"
            alt="student"
            src={
              "https://images.unsplash.com/photo-1592188657297-c6473609e988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            }
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-red-500">M2 bank account id: {data.userId}</div>
        <div>Name: {data.name}</div>
        <div>Class: {data.class}</div>
        <div>Stars banked: {data.starsBanked}</div>
      </CardContent>
    </Card>
  );
}
