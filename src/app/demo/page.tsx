"use client";

import CountdownComponent from "@/components/Countdown";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Demo() {
  const [startDate, setStartDate] = useState(new Date());
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 1);

  useEffect(() => {
    setStartDate(new Date());
  }, []);

  return (
    <main className="min-h-dvh flex flex-col justify-center items-center px-4">
      <h1 className="font-bold text-2xl md:text-4xl text-center mb-2">
        KKN Reguler Periode II 2023/2024
      </h1>
      <h1 className="font-bold text-2xl md:text-4xl text-center">
        Universitas Jember
      </h1>
      <CountdownComponent startDate={startDate} endDate={endDate} />
      <small className="my-4 text-center">
        This is a demo page, you can see the repository{" "}
        <Link
          href="https://github.com/faisallbhr/kkn-countdown"
          className="text-primary">
          here
        </Link>
        .
      </small>
    </main>
  );
}
