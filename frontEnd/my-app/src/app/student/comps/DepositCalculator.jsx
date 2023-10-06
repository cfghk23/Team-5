"use client";
import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

const DepositCalculator = () => {
  const rate = 0.04;
  const stars = 1000;
  // const { name, class, stars } = fetch(<endpoint>)
  const [period, setPeriod] = useState(-1);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Deposit Calculator</CardTitle>
        <CardDescription>
          The current interest rate is {rate * 100}%
        </CardDescription>
        <CardContent>
          <h2>Your available stars for deposit: {stars}</h2>
          <div className="flex flex-row py-3 justify-between">
            <Button
              className="button button-primary px-4"
              onClick={() => setPeriod(1)}
            >
              1 month
            </Button>
            <Button
              className="button button-primary px-4"
              onClick={() => setPeriod(3)}
            >
              3 month
            </Button>
            <Button
              className="button button-primary px-4"
              onClick={() => setPeriod(6)}
            >
              6 month
            </Button>
          </div>
          {period !== -1 && (
            <p className="bg-slate-200 mb-5">
              After {period} month, you can get{" "}
              {Math.round(stars * (1 + (rate * period) / 12))} Stars.
            </p>
          )}
          {period !== -1 && (
            <div className="px-4">
              <Button className="button button-primary px-4" onClick={() => {}}>
                Confirm
              </Button>
              <Button className="button button-primary px-4" onClick={() => {}}>
                Cancel
              </Button>
            </div>
          )}
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default DepositCalculator;
