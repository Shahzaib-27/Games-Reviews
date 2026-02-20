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
            {["Home", "Reviews", "Top Games", "Categories", "About", "Contact"].map((link) => (
              <button
                key={link}
                onClick={() =>
                  document.getElementById(link.toLowerCase().replace(" ", "-"))?.scrollIntoView({ behavior: "smooth" })
                }
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-display text-sm font-semibold mb-3">Follow Us</h4>
          <div 
           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex gap-3">
            {["Twitter", "Discord", "YouTube"].map((s) => (
              <h1 key={s} href="#"  
              className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {s} 
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
