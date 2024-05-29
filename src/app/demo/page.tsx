import CountdownComponent from "@/components/Countdown";
import Link from "next/link";

export default function Demo() {
  const today = () => new Date();
  const startDate = today();
  const endDate = new Date();
  endDate.setDate(startDate.getDate() + 1);

  return (
    <main className="min-h-dvh flex flex-col justify-center items-center px-4">
      <h1 className="font-bold text-2xl md:text-4xl text-center mb-2">
        KKN Reguler Periode II 2023/2024
      </h1>
      <h1 className="font-bold text-2xl md:text-4xl text-center">
        Universitas Jember
      </h1>
      <CountdownComponent startDate={startDate} endDate={endDate} />
      <small className="my-4">
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
