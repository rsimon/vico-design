import { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { easings } from '@react-spring/web';
import * as timeago from 'timeago.js';
import { DotsThreeOutlineVertical } from 'phosphor-react';
import { Avatar } from '@components/common';
import { ReplyForm } from './ReplyForm';
import type { Annotation } from 'src/types';
import { ActionsMenu } from './ActionsMenu';

import './AnnotationCard.css';

interface AnnotationCardProps {

  annotation: Annotation;

  // Selected annotation cards have different
  // visual style and show the reply field
  selected?: boolean; 

}

export const AnnotationCard = (props: AnnotationCardProps) => {

    // Collapsed annotation cards show only the header
  const [ collapsed, setCollapsed ] = useState(true);

  const { annotation, selected } = props;

  // TODO could there be annotations without a body? Need to guard against this!
  const firstBody = annotation.bodies[0];

  const { creator, created } = firstBody;

  const transition = useTransition([ collapsed ], {
    from: { opacity: 0, maxHeight: 0 },
    enter: { opacity: 1, maxHeight: 200 },
    leave: { opacity: 0, maxHeight: 0 }, 
    config: {
      easing: easings.easeOutCubic,
      duration: 350
    }
  });

  return (
    <article className={collapsed ? 'annotation-card' : 'annotation-card selected'}>
      <header onClick={() => setCollapsed(!collapsed)}>
        <Avatar user={creator} border size={40} />

        <div className="annotation-card-title">
          <h1>{creator.fullname || creator.id}</h1>
          <h2>{timeago.format(created)}</h2>
        </div>

        <button className="unstyled">
          <ActionsMenu />
        </button>
      </header>

      {transition((style, show) => !show && (
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