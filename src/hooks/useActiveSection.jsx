import { useEffect, useState } from "react";

export default function useActiveSection(
  sectionIds,
  rootMargin = "-40% 0px -40% 0px"
) {
  const [active, setActive] = useState(sectionIds[0] || "");

  useEffect(() => {
    const map = {};
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          map[entry.target.id] = entry.isIntersecting;
        });
        // pick the first section that is intersecting in DOM order
        for (let id of sectionIds) {
          if (map[id]) {
            setActive(id);
            return;
          }
        }
        // fallback
        setActive(sectionIds[0] || "");
      },
      {
        root: null,
        rootMargin,
        threshold: 0.15,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return active;
}
