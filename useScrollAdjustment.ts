import { useEffect } from "react";

const useScrollAdjustment = (offset: number) => {
  useEffect(() => {
    const handleHashChange = () => {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        const yOffset = -offset;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange, false);

    // Adjust scroll position on initial load if there's a hash in the URL
    if (window.location.hash) {
      handleHashChange();
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange, false);
    };
  }, [offset]);
};

export default useScrollAdjustment;