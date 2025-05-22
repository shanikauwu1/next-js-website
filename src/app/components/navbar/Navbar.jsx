import Link from "next/link";

function Navbar() {
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contact", path: "/contact" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Portfolio", path: "/portfolio" },
    { id: 6, name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <div>
      <nav>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
