import { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { easings } from '@react-spring/web';
import { Panel } from '../../Panels';
import { 
  Chats,
  ClockCounterClockwise,
  MagnifyingGlass,
  Minus, 
  Plus, 
  StackSimple,
  X
} from 'phosphor-react';

import './MenubarRight.css';

interface MenubarRightProps {

  panel: Panel | undefined;

  onChangePanel(panel: Panel | undefined): void

  onZoom(inc: number): void

}

export const MenubarRight = (props: MenubarRightProps) => {

  const [collapsed, setCollapsed] = useState<boolean>(true);

  useEffect(() => {
    if (collapsed && props.panel !== undefined)
      setCollapsed(false);
    else if (!collapsed && props.panel === undefined)
      setCollapsed(true);
  }, [ props.panel ])

  const transition = useTransition([ collapsed ], {
    from: { opacity: 0, width: 0 },
    enter: { opacity: 1, width: 65 },
    leave: { opacity: 0, width: 0 }, 
    config: {
      easing: easings.easeOutCubic,
      duration: 250
    }
  });

  const toggle = (p: Panel) => () => {
    const next = p === props.panel ? undefined : p;
    props.onChangePanel(next);
  }

  return (
    <div className={props.panel === undefined ? 'ia-menubar ia-overlay collapsed' : 'ia-menubar ia-overlay'}>
      <section>
        <button>
          <Plus onClick={() => props.onZoom(1.2)} />
        </button>
        <button>
          <Minus onClick={() => props.onZoom(0.8)}/>
        </button>
      </section>

      <div className="ia-overlay-divider ia-overlay-divider-v" />

      <section>
        <button 
          className={props.panel === Panel.ANNOTATIONS ? 'active' : undefined}
          onClick={toggle(Panel.ANNOTATIONS)}>
          <Chats />
        </button>

        <button
          className={props.panel === Panel.LAYERS ? 'active' : undefined}
          onClick={toggle(Panel.LAYERS)}>
          <StackSimple />
        </button>

        <button
          className={props.panel === Panel.SEARCH ? 'active' : undefined}
          onClick={toggle(Panel.SEARCH)}>
          <MagnifyingGlass />
        </button>

        <button
          className={props.panel === Panel.HISTORY ? 'active' : undefined}
          onClick={toggle(Panel.HISTORY)}>
          <ClockCounterClockwise />
        </button>
      </section>

      {transition((style, collapsed) => !collapsed && (
        <animated.div className="close" style={style }>
          <div className="ia-overlay-divider ia-overlay-divider-v" />

          <section >
            <button onClick={() => props.onChangePanel(undefined)}>
              <X />
            </button>
          </section>
        </animated.div>
      ))}
    </div>
  )

}