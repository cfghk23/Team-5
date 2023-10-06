"use client";
import { MainNav } from "./main-nav";
import { UserNav } from "./user-nav";

export function StudentNavBar() {
  return (
    <div className="flex h-16 items-center px-4 border-b">
      <h1 className="">Project M^2</h1>

      <div className="ml-auto flex items-center space-x-4">
        <MainNav className="mr-20" />
        <UserNav />
      </div>
    </div>
  );
}
