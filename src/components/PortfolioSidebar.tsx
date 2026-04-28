import { navItems } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

interface Props {
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}

const PortfolioSidebar = ({ darkMode, setDarkMode }: Props) => {
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setActive(id);
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const sidebarContent = (
    <div className="flex flex-col h-full py-6 px-3">
      {/* Avatar */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-comic-purple to-comic-cyan flex items-center justify-center text-primary-foreground font-display text-2xl comic-shadow">
          JD
        </div>
        <p className="mt-2 text-sm font-bold text-sidebar-foreground">
          John Doe
        </p>
        <p className="text-xs text-sidebar-foreground/60">Developer</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              active === item.id
                ? "bg-sidebar-accent text-sidebar-primary-foreground"
                : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50"
            }`}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.97 }}
          >
            <item.icon
              className={`w-5 h-5 ${active === item.id ? item.color : ""}`}
            />
            <span>{item.label}</span>
          </motion.button>
        ))}
      </nav>

      {/* Dark mode toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="mt-4 mx-auto flex items-center gap-2 px-4 py-2 rounded-xl bg-sidebar-accent text-sidebar-foreground text-sm hover:bg-sidebar-accent/80 transition-colors"
      >
        {darkMode ? (
          <Sun className="w-4 h-4 text-comic-orange" />
        ) : (
          <Moon className="w-4 h-4 text-comic-blue" />
        )}
        {darkMode ? "Light" : "Dark"}
      </button>
    </div>
  );

  return (
    <>
      {/* Menu trigger button - visible on all screens */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 rounded-xl bg-card comic-shadow"
      >
        <Menu className="w-6 h-6 text-foreground" />
      </button>

      {/* Sidebar overlay - shown on all screens when clicked */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-foreground/30 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              className="fixed left-0 top-0 h-screen w-56 bg-sidebar z-50"
              initial={{ x: -224 }}
              animate={{ x: 0 }}
              exit={{ x: -224 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 text-sidebar-foreground"
              >
                <X className="w-5 h-5" />
              </button>
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioSidebar;
