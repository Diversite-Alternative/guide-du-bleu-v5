import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
  delay?: number;
}

export const StatCard = ({
  value,
  label,
  className,
  delay = 0,
}: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={cn(
        "text-center p-6",
        className
      )}
    >
      <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{value}</p>
      <p className="text-muted-foreground font-body text-sm">{label}</p>
    </motion.div>
  );
};
