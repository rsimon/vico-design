import { animated, useTransition } from 'react-spring';
import { easings } from '@react-spring/web';
import { Panel } from '../Panels';
import { AnnotationList } from './AnnotationList/AnnotationList';

interface RightSidebarProps {

  panel: Panel | undefined

}

export const RightSidebar = (props: RightSidebarProps) => {

  const transition = useTransition([ props.panel ], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }, 
    config: {
      easing: easings.easeOutCubic,
      duration: 120
    }
  });

  return (
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
  )

}