import CountdownComponent from "@/components/Countdown";

export default function Home() {
  const startDate = new Date("2024-07-10");
  const endDate = new Date("2024-08-23");
  const startDateGmtPlus7 = new Date(startDate.getTime() - 7 * 60 * 60 * 1000);
  const endDateGmtPlus7 = new Date(endDate.getTime() - 7 * 60 * 60 * 1000);

  return (
    <main className="min-h-dvh flex flex-col justify-center items-center px-4">
      <h1 className="font-bold text-2xl md:text-4xl text-center mb-2">
        KKN Reguler Periode II 2023/2024
      </h1>
      <h1 className="font-bold text-2xl md:text-4xl text-center">
        Universitas Jember
      </h1>
      <CountdownComponent
        startDate={startDateGmtPlus7}
        endDate={endDateGmtPlus7}
      />
    </main>
  );
}
