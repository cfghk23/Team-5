"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

//backend? useEffect and fetch from backend API

const data = [
  {
    imageUrl: "",
    fallback: "student",
    name: "Olivia Martin",
    activity: "just got 'fire' badgee",
  },
];

export function RecentSales() {
  return (
    // possible backend data through db's orm :
    // Customer:{name,email,icon} , order:{product:{price:}}

    // spacing of 8 with along vertical ,spanning the Card
    <div className="space-y-8">
      {data.map((user, idx) => {
        return (
          <div className="flex items-center">
            {/* size of avatar  */}
            <Avatar className="h-9 w-9">
              <AvatarImage src={user.imageUrl} alt="Avatar" />
              <AvatarFallback>{user.fallback}</AvatarFallback>
            </Avatar>

            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{user.name}</p>
            </div>

            {/* push to left in flex using  ml-auto */}
            <div className="ml-auto font-medium">${user.activity}</div>
          </div>
        );
      })}
    </div>
  );
}
