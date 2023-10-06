"use client";
import { useState } from "react";

const DepositCalculator = () => {
    const rate = 0.04;
    const stars = 100;
    // const { name, class, stars } = fetch(<endpoint>)
    const [period, setPeriod] = useState(-1);

  return (
    <div className="mb-10 flex-row">
    <div className="p-10">
    <h1 className="flex h-10 items-center justify-between font-bold">Deposit Calculator</h1>
    <p className="px-4">The current interest rate is {rate*100}%</p>
    </div>
    <div className="p-10">
    <h2>Your available stars for deposit: {stars}</h2>
    <div className="flex flex-row py-3">
        <button className="button button-primary px-4" onClick={() => setPeriod(1)}>1 month</button>
        <button className="button button-primary px-4" onClick={() => setPeriod(3)}>3 month</button>
        <button className="button button-primary px-4" onClick={() => setPeriod(6)}>6 month</button>
    </div>
    {period!==-1 && <p>After {period} month, you can get {Math.round(stars*(1+rate*period/12))}</p>}
    {period!==-1 &&  <div className="px-4 ">
        <button className="button button-primary px-4" onClick={() => {}}>Confirm</button>
        <button className="button button-primary px-4" onClick={() => {}}>Cancel</button>
    </div>}

    </div>
    </div>
  )
}

export default DepositCalculator