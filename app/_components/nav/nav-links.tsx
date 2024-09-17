"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Usługi", href: "/uslugi" },
  { name: "Galeria", href: "/galeria" },
  { name: "Porady i nowinki", href: "/porady-i-nowinki" },
  { name: "O mnie", href: "/o-mnie" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link, index) => {
        const isActive = pathname === link.href;
        return (
          <div key={index}>
            {index > 0 && (
              <span className="nav-dot pointer-events-none">●</span>
            )}
            <Link
              href={link.href}
              className={clsx({
                underline: isActive,
              })}
            >
              {link.name}
            </Link>
          </div>
        );
      })}
    </>
  );
}
