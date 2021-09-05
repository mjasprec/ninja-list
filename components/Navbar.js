import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/educator.png" alt="brand logo" height={77} width={77} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja Listing</a>
      </Link>
      <Link href="/admin">
        <a>Admin</a>
      </Link>
      <Link href="/user">
        <a>User</a>
      </Link>
    </nav>
  );
};

export default Navbar;
