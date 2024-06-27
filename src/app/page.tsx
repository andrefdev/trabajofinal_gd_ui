import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={283}
        height={64}
      />
    </main>
  );
}
