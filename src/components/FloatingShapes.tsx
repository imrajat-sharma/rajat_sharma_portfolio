import { motion } from "framer-motion";

const shapes = [
  { color: "bg-comic-purple/20", size: "w-64 h-64", x: "5%", y: "10%", delay: 0 },
  { color: "bg-comic-cyan/15", size: "w-48 h-48", x: "75%", y: "20%", delay: 1 },
  { color: "bg-comic-orange/15", size: "w-36 h-36", x: "60%", y: "65%", delay: 2 },
  { color: "bg-comic-pink/15", size: "w-52 h-52", x: "10%", y: "70%", delay: 0.5 },
  { color: "bg-comic-lime/10", size: "w-40 h-40", x: "85%", y: "80%", delay: 1.5 },
  { color: "bg-comic-blue/15", size: "w-32 h-32", x: "40%", y: "5%", delay: 3 },
];

const FloatingShapes = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {shapes.map((shape, i) => (
      <motion.div
        key={i}
        className={`absolute ${shape.size} ${shape.color} rounded-full blur-3xl`}
        style={{ left: shape.x, top: shape.y }}
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          scale: [1, 1.1, 1],
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}
        transition={{
          duration: 8 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: shape.delay,
        }}
      />
    ))}
  </div>
);

export default FloatingShapes;
