import { useState, useEffect } from "react";
import "../styles/CategoryNav.css";

function CategoryNav({ sections }) {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        threshold: 0.3,
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="category-nav">
      {sections.map((section) => (
        <button
          key={section.id}
          className={`category-btn ${
            activeSection === section.id ? "active" : ""
          }`}
          onClick={() =>
            document.getElementById(section.id)?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          {section.title}
        </button>
      ))}
    </div>
  );
}

export default CategoryNav;
