import Link from "next/link";
import Nav from "@/components/navbar";

export default function Home() {
  return (
    <section className="flex h-[calc(100vh-3.5rem)] items-center justify-center">
      <div className="flex flex-auto flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-200 sm:dark:border-gray-300/10">
          XO Starter
        </h1>
        <h2 className="mt-2 text-gray-700 dark:text-gray-400">
          Check out the{" "}
          <Link href="/" className="text-blue-500 underline underline-offset-2">
            repository
          </Link>
          .
        </h2>
      </div>
    </section>
  );
}
