'use client';

import React from 'react';

interface AlphabetIndexProps {
  letters: string[];
}

export default function AlphabetIndex({ letters }: AlphabetIndexProps) {
  const scrollToSection = (letter: string) => {
    const element = document.getElementById(`section-${letter}`);
    const offset = 150; // Adjust this value based on your header + ad height
    const elementPosition = element?.getBoundingClientRect().top ?? 0;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      {letters.map(letter => (
        <button
          key={letter}
          onClick={() => scrollToSection(letter)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold transition-colors"
        >
          {letter}
        </button>
      ))}
    </div>
  );
} 