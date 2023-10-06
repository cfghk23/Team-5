"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

//backend? useEffect and fetch from backend API

const data = [
  {
    imageUrl: "",
    fallback: "ST",
    name: "Student 1",
    activity: "just got 'fire' badge!",
  },
  {
    imageUrl: "",
    fallback: "ST",
    name: "Student 2",
    activity: "just reached 1st in class!",
  },
  {
    imageUrl: "",
    fallback: "ST",
    name: "Student 3",
    activity: "Just redeemed MacDonald $10 coupon!",
  },
  {
    imageUrl: "",
    fallback: "ST",
    name: "Student 4",
    activity: "just reached 3rd on leaderboard(Hong Kong)!",
  },
  {
    imageUrl: "",
    fallback: "ST",
    name: "Student 5",
    activity: "Just deposited 1000 stars !",
  },
];

export function RecentActivity() {
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
            <div className="ml-10 font-medium">{user.activity}</div>
          </div>
        );
      })}
    </div>
  );
}
