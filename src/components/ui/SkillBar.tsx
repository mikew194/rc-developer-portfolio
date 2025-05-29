import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({
  name,
  percentage,
  color = 'primary',
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  // Determine color class based on color prop
  const colorClasses = {
    primary: 'bg-primary-600 dark:bg-primary-500',
    secondary: 'bg-secondary-500 dark:bg-secondary-400',
    accent: 'bg-accent-400 dark:bg-accent-300',
  };
  
  const bgClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.primary;
  
  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-base font-medium text-gray-800 dark:text-gray-200">{name}</span>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{percentage}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-2.5 rounded-full ${bgClass}`}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;