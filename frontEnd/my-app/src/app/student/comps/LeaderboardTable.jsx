import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import React from 'react'

const LeaderboardTable = () => {
    const players = [
        {
            name: "John",
            score: 10000,
            school: "ABBBB"
        },
        {
            name: "Wick",
            score: 8000,
            school: "ACCC"
        },
        {
            name: "Dan",
            score: 8500,
            school: "ADDD"
        },
    ]

  return (
    <Table>
        <TableCaption>LeaderBoard as of Oct 2023</TableCaption>
        <TableHeader>
        <TableRow>
            <TableHead className="w-[100px]">Rank</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>School</TableHead>
        </TableRow>
        </TableHeader>
  <TableBody>
    {players.sort((a,b) => {return b.score-a.score;}).map((player, index) => (
        <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{player.name}</TableCell>
            <TableCell>{player.score}</TableCell>
            <TableCell>{player.school}</TableCell>
        </TableRow>
        ))}
  </TableBody>
</Table>
  )
}

export default LeaderboardTable;