import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
    const words = ['Shahas Nizar', 'UI/UX Developer', 'Design Enthusiast', 'Web Developer'];
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [delay, setDelay] = useState(30); // Typing speed
    const [isCursorVisible, setIsCursorVisible] = useState(true); // Cursor visibility state
  
    useEffect(() => {
        const currentWord = words[index % words.length];
        const isEnd = isDeleting ? text.length === 0 : text.length === currentWord.length;
    
        const timer = setTimeout(() => {
          if (isDeleting) {
            setText(currentWord.substring(0, text.length - 1));
          } else {
            setText(currentWord.substring(0, text.length + 1));
          }
    
          if (isEnd) {
            setIsDeleting(!isDeleting);
            setDelay(isDeleting ? 500 : 1200); // Pause after finishing a word
            if (isDeleting) {
              setIndex((prevIndex) => prevIndex + 1); // Move to the next word
            }
          } else {
            setDelay(30); // Typing speed
          }
        }, delay);
    
        return () => clearTimeout(timer); // Clean up the timer on unmount
      }, [text, isDeleting, index, delay]); // Only run when these values change

      // Toggle cursor visibility
  useEffect(() => {
    const blinkTimer = setInterval(() => {
        if(text.length != 0){
            setIsCursorVisible((prev) => !prev);
        }
    }, 500); // Blink every 500ms

    return () => clearInterval(blinkTimer); // Clean up the blinking timer
  }, [text]);


    return (
        <span className="index-module_type__E-SaG">
          {text}
          {isCursorVisible && <span className="cursor">|</span>}
        </span>
      );
//   return <span className="index-module_type__E-SaG">{text}</span>//<h1>{text}</h1>;
};

export default TypingAnimation;