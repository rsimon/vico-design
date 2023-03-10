import { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { easings } from '@react-spring/web';
import { Panel } from '../Panels';
import { MenubarRight } from './MenubarRight/MenubarRight';
import { AnnotationsPanel } from './AnnotationsPanel/AnnotationsPanel';

import './SidebarRight.css';

interface SidebarRightProps {

  onZoom(inc: number): void;

}

export const SidebarRight = (props: SidebarRightProps) => {

  const [panel, setPanel] = useState<Panel | undefined>(undefined);

  const transition = useTransition([ panel ], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }, 
    config: {
      easing: panel === undefined ? easings.easeOutCubic : easings.easeInCubic,
      duration: 250
    }
  });

  return (
    <div className="ia-sidebar-right-container">
      <MenubarRight 
        panel={panel}
        onChangePanel={setPanel} 
        onZoom={props.onZoom} />
        
      <div className="ia-sidebar-right">
        {transition((style, panel) => (
          <>
            {panel === Panel.ANNOTATIONS && 
              <animated.aside style={style}>
                <AnnotationsPanel />
              </animated.aside>
            }
          </>
        ))}
      </div> 
    </div>
  )

}