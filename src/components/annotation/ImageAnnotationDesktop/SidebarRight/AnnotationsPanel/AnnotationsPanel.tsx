import { useState } from 'react';
import { AnnotationCard } from '@components/annotation/AnnotationCard';
import type { Annotation } from 'src/types';

import './AnnotationsPanel.css';

const ANNOTATIONS: Annotation[] = [{
  target: {},
  bodies: [{
    creator: { id: 'aboutgeo', fullname: 'Rainer Simon' },
    created: new Date('2023-03-06T08:19:00Z'),
    purpose: 'commenting',
    value: 'This is a comment.'
  }]
},{
  target: {},
  bodies: [{
    creator: { id: 'lorinjameson', fullname: 'Lorin Jameson' },
    created: new Date('2023-03-06T08:22:00Z'),
    purpose: 'commenting',
    value: 'This is another comment!'
  }]
}]

export const AnnotationsPanel = () => {

  const [selected, setSelected] = useState<number | null>(null);

  const onExpand = (idx: number) => () =>
    setSelected(idx)

  const onClose = (idx: number) => () => {
    if (idx === selected) 
      setSelected(null);
  }
  
  return (
    <div className="ia-sidebar-panel-content ia-panel-annotations">
      {ANNOTATIONS.map((annotation, idx) => (
        <AnnotationCard 
          annotation={annotation}
          selected={selected === idx} 
          onExpand={onExpand(idx)} 
          onClose={onClose(idx)}/>
      ))}
    </div>
  )

}