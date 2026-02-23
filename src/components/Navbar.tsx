import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

type NavLinkItem = {
  id: number;
  label: string;
  path: string
};


const navLinks: NavLinkItem[] = [
  { id:1 , label: "Home",      path: "/"              },
  { id:2 , label: "Reviews",   path: "/morereviews"   },
  { id:3 , label: "Top Games", path: "/topgamespage"  },
  { id:4 , label: "About",     path: "/aboutpage"     },
  { id:5 , label: "Contact",   path: "/contactPage"   },
];

const Navbar = () => {
  const navigate = useNavigate();
  
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <nav
      className="bg-black fixed top-0 left-0 right-0 z-50 transition-all duration-300 ">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display text-xl md:text-2xl font-bold gradient-text cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <button className="outline-none " 
            onClick={()=> navigate("/")}>
            GameReviews
            </button>
            
          </motion.span>

          <div className="hidden md:flex items-center gap-8">
            
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
               <h3>{link.label}</h3>
              </Link>
            ))}

          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;
