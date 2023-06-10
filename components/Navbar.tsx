import Link from "next/link";
import Image from "next/image";

import Button from "./Button";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[90rem] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/images/logo.svg"
            alt="Car Hub Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <Button
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[8.125rem]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
