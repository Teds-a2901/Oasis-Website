import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src="/Logo.png"
        quality={100}
        height="55"
        width="55"
        alt="The Wild Oasis logo"
      />
      <span className="text-lg font-semibold text-primary-100">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
