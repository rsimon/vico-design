import * as timeago from 'timeago.js';
import { DotsThreeVertical } from 'phosphor-react';
import { Avatar } from '@components/common';
import type { Annotation } from 'src/types';

import './AnnotationCard.css';

interface AnnotationCardProps {

  annotation: Annotation;

  // Collapsed annotation cards show only the header
  collapsed?: boolean;

  // Selected annotation cards have different
  // visual style and show the reply field
  selected?: boolean; 

}

export const AnnotationCard = (props: AnnotationCardProps) => {

  const { annotation, collapsed, selected } = props;

  // TODO could there be annotations without a body? Need to guard against this!
  const firstBody = annotation.bodies[0];

  const { creator, created } = firstBody;

  const comments = annotation.bodies.filter(b => b.purpose === 'commenting')

  return (
    <article className="annotation-card">
      <header>
        <Avatar user={creator} />
        <h1>
          <span className="ac-creator">{creator.fullname || creator.id}</span>
          <span className="ac-created">{timeago.format(created)}</span>
        </h1>

        <button className="unstyled">
         <DotsThreeVertical />
        </button>
      </header>

      {!props.collapsed && (
        <p>
          {firstBody.value}
        </p>
      )}
    </article>
  )

}