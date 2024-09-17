import Link from "next/link";

export default function CallToAction() {
  return (
    <>
      <Link href="/umow-wizyte" className="">
        Zaloguj się
      </Link>
      <Link href="/umow-wizyte" className="border-2 p-1">
        Umów wizytę
      </Link>
    </>
  );
}
