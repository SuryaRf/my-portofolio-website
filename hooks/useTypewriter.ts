import { useState, useEffect } from 'react';

interface TypewriterOptions {
  words: string[];
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
}

export const useTypewriter = ({
  words,
  loop = true,
  typeSpeed = 150,
  deleteSpeed = 100,
  delaySpeed = 2000,
}: TypewriterOptions) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            // Finished typing current word
            setTimeout(() => setIsDeleting(true), delaySpeed);
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentWord.slice(0, currentText.length - 1));
          } else {
            // Finished deleting
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (loop ? (prev + 1) % words.length : Math.min(prev + 1, words.length - 1)));
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, loop, typeSpeed, deleteSpeed, delaySpeed]);

  return { text: currentText, isDeleting };
};
