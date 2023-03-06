import { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import * as timeago from 'timeago.js';
import { DotsThreeVertical } from 'phosphor-react';
import { Avatar } from '@components/common';
import { ReplyForm } from './ReplyForm';
import type { Annotation } from 'src/types';

import './AnnotationCard.css';

interface AnnotationCardProps {

  annotation: Annotation;

  // Selected annotation cards have different
  // visual style and show the reply field
  selected?: boolean; 

}

export const AnnotationCard = (props: AnnotationCardProps) => {

    // Collapsed annotation cards show only the header
  const [ collapsed, setCollapsed ] = useState(false);

  const { annotation, selected } = props;

  // TODO could there be annotations without a body? Need to guard against this!
  const firstBody = annotation.bodies[0];

  const { creator, created } = firstBody;

  const transition = useTransition([ collapsed ], {
    from: { opacity: 0, maxHeight: 0 },
    enter: { opacity: 1, maxHeight: 200 },
    leave: { opacity: 0, maxHeight: 0 }
  });

  return (
    <article className="annotation-card">
      <header onClick={() => setCollapsed(!collapsed)}>
        <Avatar user={creator} />
        <h1>
          <span className="ac-creator">{creator.fullname || creator.id}</span>
          <span className="ac-created">{timeago.format(created)}</span>
        </h1>

        <button className="unstyled">
         <DotsThreeVertical />
        </button>
      </header>

      {transition((style, show) => show && (
        <animated.div style={style}>
          <p>
            {firstBody.value}
          </p>

          <ReplyForm />
        </animated.div>
      ))}
    </article>
  )

}