import { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { easings } from '@react-spring/web';
import { Panel } from '../Panels';
import { RightSidebarMenu } from './RightSidebarMenu/RightSidebarMenu';
import { AnnotationList } from './AnnotationList/AnnotationList';

interface RightSidebarProps {

  onZoom(inc: number): void;

}

export const RightSidebar = (props: RightSidebarProps) => {

  const [panel, setPanel] = useState<Panel | undefined>(undefined);

  const transition = useTransition([ panel ], {
    from: { opacity: 0, width: 200 },
    enter: { opacity: 1, width: 290 },
    leave: { opacity: 0, width: 200 }, 
    config: {
      easing: panel === undefined ? easings.easeOutCubic : easings.easeInCubic,
      duration: 400
    }
  });

  const onChangePanel = (panel: Panel | undefined) => {

  }

  return (
    <div className="ia-sidebar-container">
      <ImageMenubar 
        collapsed={Boolean(panel)}
        onChangePanel={onChangePanel} 
        onZoom={props.onZoom} />

      <div id="ia-sidebar ia-sidebar-right">
        {transition((style, panel) => (
          <>
            {panel === Panel.ANNOTATIONS && 
              <animated.div style={style}>
                <AnnotationList />
              </animated.div>
            }
          </>
        ))}
      </div>
    </div>
  )

}