import Link from "next/link";
import NavLinks from "./nav-links";
import CallToAction from "@/app/_components/nav/cta";

export default function Nav() {
  return (
    <header className="w-full flex gap-12 items-center justify-evenly">
      <Link href="/">Kraina Psa</Link>
      <nav className="flex gap-8 [&_.nav-dot]:mr-8 items-center">
        <NavLinks />
      </nav>
      <div className="flex gap-8 items-center">
        <CallToAction />
      </div>
    </header>
  );
}
