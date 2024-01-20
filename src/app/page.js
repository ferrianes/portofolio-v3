import Navbar from "@/components/organisms/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-24 pb-24 pt-32">
      <Navbar />
      <div className=" relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-200 after:via-red-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-red-900 after:dark:via-red-700 after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ff707c70] rounded-full"
          src="/images/me.webp"
          alt="Ferrian Eka Septiawan"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 mt-10">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100">
          Ferrian Eka Septiawan
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-400">
          I'm a Frontend Developer
        </p>
        <p className="text-center text-gray-500 dark:text-gray-400">
          2 years of experience in fullstack development, using Laravel and
          Codeigniter for developing a website and web applications.
        </p>
      </div>
    </main>
  );
}
