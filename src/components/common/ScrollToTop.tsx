import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {

    if (location.state?.scrollTo) {
      const el = document.getElementById(
        location.state.scrollTo
      );

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth"
          });
        }, 100);
        return;
      }
    }

    window.scrollTo(0, 0);

  }, [location]);

  return null;
}