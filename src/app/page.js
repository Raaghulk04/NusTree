import Link from 'next/link'
import ModuleTracker from '../components/module-tracker'
import prisma from "../lib/db"
import getAllMods from "./getAllMods";

export default async function HomePage() {
  const mods = await getAllMods();
  console.log(mods[0]);
  console.log("hello")
  
  return (
    <main>
      <h1 className="mainTitle">NusTree</h1>
      <p><i>Plan your academic pathway in ONE place</i></p>
      <Link href="/signup">Sign Up</Link>
      <Link href="/signin">Sign In</Link>
      <Link href="/homePage">test</Link>
    </main>
  );
}
