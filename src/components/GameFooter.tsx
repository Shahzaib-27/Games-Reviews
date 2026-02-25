import { Link } from "react-router-dom";

type NavLinkItem = {
  id: number;
  label: string;
  path: string;
};

const QuickLinks: NavLinkItem[] = [
      { id:1 , label: "Home",      path: "/"              },
      { id:2 , label: "Reviews",   path: "/morereviews"   },
      { id:3 , label: "Top Games", path: "/topgamespage"  },
      { id:4 , label: "About",     path: "/aboutpage"     },
      { id:5 , label: "Contact",   path: "/contactPage"   },
];


const FollowLinks = [
      { label: "Instragram", href: "https://www.instagram.com/" },
      { label: "YouTube",    href: "https://www.youtube.com/" },
      { label: "Discord",    href:"https://discord.com/" },
      { label: "Twitter",    href:"https://x.com/" },
];


const Footer = () => (
  <footer className="border-t border-border py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          
          <span className="font-display text-xl font-bold gradient-text">GameReview</span>
         
          <p className="text-sm text-muted-foreground mt-3">
            Your {new Date().getFullYear()} trusted source for honest game reviews .
          </p>

        </div>

        <div >
          <h4 className="font-display text-sm font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2">            
            {QuickLinks.map((link,index) => (
            <Link
              key={index}
              to={link.path}
               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors "
            >
              <h1>{link.label}</h1>
            </Link>
          ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-display text-sm font-semibold mb-3">Follow Us</h4>
          <div 
           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
           className="flex flex-col gap-2 ">
            {FollowLinks.map((links,index) => (
              <h1
              key={index}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer ">     
              <a
                  href={links.href}
                  target="_blank"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer ">
                  {links.label}                 
                </a>
              </h1>
            ))}
          </div>
        </div>
      </div>
      
      <div className="border-t border-border pt-6 text-center">
       
        <p className="text-xs text-muted-foreground">@ {new Date().getFullYear()} GameReview. All rights reserved.</p>

     </div>
   
    </div>
  </footer>
);

export default Footer;
