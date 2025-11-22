import { useEffect, useMemo, useState } from "react";

/**
 * Typewriter rotativo:
 * escribe -> pausa -> borra -> cambia frase.
 *
 * props:
 *  - phrases: array de strings
 *  - typingSpeed: ms por letra al escribir
 *  - deletingSpeed: ms por letra al borrar
 *  - pauseTime: ms de pausa cuando termina de escribir
 *  - className: estilos tailwind opcionales
 */
export default function TypewriterRotator({
  phrases = [],
  typingSpeed = 45,
  deletingSpeed = 25,
  pauseTime = 1200,
  className = "",
}) {
  const safePhrases = useMemo(
    () => (phrases.length ? phrases : ["..."]),
    [phrases]
  );

  const [index, setIndex] = useState(0);      // frase actual
  const [text, setText] = useState("");      // texto visible
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = safePhrases[index];
    let timer;

    if (!isDeleting) {
      // escribir
      if (text.length < current.length) {
        timer = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        // pausa al terminar
        timer = setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else {
      // borrar
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(current.slice(0, text.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setIndex((i) => (i + 1) % safePhrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, safePhrases, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      {text}
      {/* cursor */}
      <span className="ml-0.5 inline-block w-2 h-5 bg-primary/70 animate-pulse rounded-sm" />
    </span>
  );
}
