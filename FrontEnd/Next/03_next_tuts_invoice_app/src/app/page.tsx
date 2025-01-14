import clsx from "clsx";
import { Lusitana } from "next/font/google";

const lusitana = Lusitana({
  weight: ["400", "700"],
  variable: "--font-lusitana",
  subsets: ["latin"],
});

export default function Home() {
  let status = "paid";
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <h1 className="text-6xl text-center mt-5">Hello World</h1>
      <span
        className={clsx(
          'inline-flex items-center rounded-full px-10 py-5 text-ls mt-5 ',
          {
            'bg-gray-100 text-gray-500': status === 'pending',
            'bg-green-500 text-white': status === 'paid',
          },
        )}
      > {status}</span>
      <p className={`${lusitana.className} text-6xl`}>This is a Lusitana</p>
    </div>
  );
}
