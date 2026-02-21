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
  { label: "Twitter", path: " " },
  { label: "Discord", path: "  " },
  { label: "YouTube", path: " " },
];


const Footer = () => (
  <footer className="border-t border-border py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          
          <span className="font-display text-xl font-bold gradient-text">GameReview</span>
         
          <p className="text-sm text-muted-foreground mt-3">
            Your trusted source for honest game reviews .
          </p>

        </div>

        <div>
          <h4 className="font-display text-sm font-semibold mb-3">Quick Links</h4>
          <div className="space-y-2">            
            {QuickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-display text-sm font-semibold mb-3">Follow Us</h4>
          <div 
           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
           className="flex gap-3">
            {FollowLinks.map((s) => (
              <h1 key={s.path}  
              className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                {s.label} 
              </h1>
            ))}
          </div>
        </div>
      </div>
      
      <div className="border-t border-border pt-6 text-center">
       
        <p className="text-xs text-muted-foreground">@ GameReview. All rights reserved.</p>
     
     </div>
   
    </div>
  </footer>
);

export default Footer;
