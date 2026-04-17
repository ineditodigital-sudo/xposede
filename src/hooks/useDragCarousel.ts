import { useState, useCallback } from 'react';

interface UseDragCarouselProps {
  currentIndex: number;
  maxIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export function useDragCarousel({ currentIndex, maxIndex, onNext, onPrev }: UseDragCarouselProps) {
  const [dragStartX, setDragStartX] = useState(0);

  const handleDragStart = useCallback((event: any, info: any) => {
    setDragStartX(info.point.x);
  }, []);

  const handleDragEnd = useCallback((event: any, info: any) => {
    const dragDistance = info.point.x - dragStartX;
    const threshold = 50; // Minimum distance to trigger navigation

    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0 && currentIndex > 0) {
        // Dragged right, go to previous
        onPrev();
      } else if (dragDistance < 0 && currentIndex < maxIndex) {
        // Dragged left, go to next
        onNext();
      }
    }
  }, [dragStartX, currentIndex, maxIndex, onNext, onPrev]);

  return {
    handleDragStart,
    handleDragEnd
  };
}
