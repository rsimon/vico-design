import { AnnotationCard } from '@components/annotation/AnnotationCard';
import type { ImageAnnotation } from 'src/types';

interface AnnotationPanelProps {

  annotations: ImageAnnotation[]

}

export const AnnotationPanel = (props: AnnotationPanelProps) => {

  const { annotations } = props;

  return (
    <div className="annotation-list">
      {annotations.map(annotation => (
        <AnnotationCard annotation={annotation} />
      ))}
    </div>
  )

}