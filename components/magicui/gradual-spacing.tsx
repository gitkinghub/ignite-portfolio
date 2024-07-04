"use client";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  // Split text into words
  const words = text.split(" ");

  // CHANGE: Keep track of the total character count
  let totalCharCount = 0;

  return (
    <div className="inline-block">
      <AnimatePresence>
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-2 mb-1">
            {word.split("").map((char, charIndex) => {
              // CHANGE: Calculate delay based on total character count
              const delay = totalCharCount * delayMultiple;
              totalCharCount++;

              return (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={framerProps}
                  transition={{ duration, delay }}
                  className={cn("inline-block", className)}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        ))}
      </AnimatePresence>
    </div>
  );
}
// if shit happens, go to claude and copy the 2nd last code