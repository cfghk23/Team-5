"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const DepositCalculator = () => {
    const RATE = 0.044;
    // const { name, class, stars } = fetch(<endpoint>)
    const [period, setPeriod] = useState("");
  return (
    <div className="mb-10">
    <div>
    <h1 className="font-bold h-1 p-10">Deposit Calculator</h1>
    <p className="px-14">The current interest rate is {RATE*100}%</p>
    </div>

    </div>
  )
}

export default DepositCalculator