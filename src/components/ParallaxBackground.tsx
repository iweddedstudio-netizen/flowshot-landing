'use client';

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBackgroundProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

/**
 * Параллакс эффект для темных фонов
 * Создает ощущение глубины, как будто темный фон находится за белым контентом
 *
 * @param speed - скорость параллакса (0.5 = медленнее, 1.5 = быстрее). По умолчанию 0.5
 * @param className - CSS классы для фона
 */
const ParallaxBackground = ({
  children,
  speed = 0.5,
  className = ''
}: ParallaxBackgroundProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Отслеживаем прокрутку относительно элемента
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"] // Начинаем когда элемент входит в viewport
  });

  // Трансформируем прогресс прокрутки в движение
  // Отрицательное значение для эффекта "отставания" фона
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -200 * speed] // Фон движется медленнее, создавая эффект глубины
  );

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Параллакс слой - темный фон */}
      <motion.div
        style={{ y }}
        className={`absolute inset-0 -z-10 ${className}`}
        // Оптимизация: используем will-change только во время анимации
        transition={{ ease: "linear" }}
      >
        {/* Добавляем небольшое растяжение, чтобы не было пустых областей */}
        <div className="w-full h-[120%] -mt-[10%]" />
      </motion.div>

      {/* Контент */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;
