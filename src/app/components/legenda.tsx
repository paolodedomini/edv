"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function Legenda() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="legenda">
      <button onClick={() => setOpen((prev) => !prev)}>?</button>
      <AnimatePresence>
        {open && (
          <motion.ul
            className="legenda__content"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
          >
            <li>namastace</li>
            <li>pasqualace</li>
            <li>ho visto cose</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Legenda;
