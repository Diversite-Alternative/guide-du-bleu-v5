import { motion } from 'framer-motion';

interface GuideSectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

export const GuideSection = ({ id, title, children }: GuideSectionProps) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4 }}
            className="mb-12 scroll-mt-24"
        >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>
            <div className="space-y-4">
                {children}
            </div>
        </motion.section>
    );
};
