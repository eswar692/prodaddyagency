import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const sidebarVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};

const Sidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        overlayRef.current &&
        overlayRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Sidebar */}
          <motion.aside
            key="sidebar"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-[80%] h-full bg-white dark:bg-zinc-900 shadow-2xl px-6 py-10 flex flex-col justify-start items-center gap-8"
          >
            {/* Logo or Brand */}
            <h1 className="text-2xl font-bold text-blue-700 dark:text-white tracking-tight">
              Pro Daddy Agency
            </h1>

            {/* Navigation */}
            <nav className="flex flex-col space-y-6 w-full items-center text-lg font-semibold text-gray-700 dark:text-white">
              <Link
                to="/"
                onClick={onClose}
                className="hover:text-blue-500 transition-all duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={onClose}
                className="hover:text-blue-500 transition-all duration-200"
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={onClose}
                className="hover:text-blue-500 transition-all duration-200"
              >
                Services
              </Link>
              <Link
                to="/contact"
                onClick={onClose}
                className="hover:text-blue-500 transition-all duration-200"
              >
                Contact
              </Link>
            </nav>
          </motion.aside>

          {/* Overlay */}
          <div ref={overlayRef} className="w-[20%] h-full opacity-0" />
        </div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
