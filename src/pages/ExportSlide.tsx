import { useParams } from 'react-router-dom';
import { forfeitnessSlides } from '@/slides/forfeitness';
import { SlideScaleContext } from '@/components/slides/ScaledSlide';

export default function ExportSlide() {
  const { index } = useParams();
  const i = Math.max(0, Math.min(forfeitnessSlides.length - 1, parseInt(index || '0', 10)));
  const Slide = forfeitnessSlides[i].component;
  return (
    <SlideScaleContext.Provider value={1}>
      <div
        className="slide-content slide-canvas bg-background"
        style={{ width: 1920, height: 1080, position: 'absolute', top: 0, left: 0, overflow: 'hidden' }}
      >
        <Slide />
      </div>
    </SlideScaleContext.Provider>
  );
}
