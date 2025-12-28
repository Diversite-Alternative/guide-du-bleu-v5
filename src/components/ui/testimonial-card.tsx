import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  rating?: number;
  className?: string;
  delay?: number;
}

export const TestimonialCard = ({
  quote,
  author,
  role,
  avatar,
  rating = 5,
  className,
  delay = 0,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "p-6 rounded-2xl bg-card shadow-card",
        className
      )}
    >
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-secondary text-secondary"
          />
        ))}
      </div>
      <blockquote className="text-foreground font-body leading-relaxed mb-6">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          {avatar ? (
            <img src={avatar} alt={author} className="w-10 h-10 rounded-full object-cover" />
          ) : (
            <span className="text-primary font-semibold">{author[0]}</span>
          )}
        </div>
        <div>
          <p className="font-semibold text-sm">{author}</p>
          <p className="text-muted-foreground text-xs">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};
