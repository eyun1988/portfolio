import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypewriterProps {
    text: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
            if (i <= text.length) {
                setDisplayedText(text.slice(0, i));
                i++;
            } else {
                clearInterval(intervalId);
            }
        }, 100);
        return () => clearInterval(intervalId);
    }, [text]);

    return (
        <motion.div
            className="text-2xl font-bold "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {displayedText}
        </motion.div>
    );
};

export default Typewriter;
