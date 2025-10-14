import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  // On first load, check saved theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  // Whenever `isDark` changes, update DOM and localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // Toggle theme manually
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-primary text-primary-foreground mt-[1px]  mx-2 rounded-full  transition-all hover:scale-105 h-[0.1px] w-2 mb-0 text-sm"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}

export default ThemeToggle;
