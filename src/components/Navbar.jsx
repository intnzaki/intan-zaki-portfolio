import logo from "../assets/iszlogo2.png";

const navLinks = [
  { id: 1, href: "#about", text: "About" },
  { id: 2, href: "#experience", text: "Experience" },
  { id: 3, href: "#projects", text: "Projects" },
  { id: 4, href: "#contact", text: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-purple-900 bg-opacity-15 backdrop-blur-md mb-16 flex items-center justify-between py-4 px-8 z-50">
      <div className="flex-shrink-0 items-center">
      <a href="/" className="flex items-center">
          <img className="mx-2 w-20" src={logo} alt="logo" />
        </a>
      </div>
      <div className="flex items-center justify-center gap-2 text-sm">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="px-3 py-1 rounded-full transition-colors hover:bg-black"
          >
            {link.text}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
