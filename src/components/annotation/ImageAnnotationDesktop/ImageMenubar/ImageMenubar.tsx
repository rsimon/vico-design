import { useState } from 'react';
import { 
  Chats,
  ClockCounterClockwise,
  MagnifyingGlass,
  Minus, 
  Plus, 
  StackSimple
} from 'phosphor-react';
import { Panel } from '../Panels';

import './ImageMenubar.css';

interface ImageMenubarProps {

  onChangePanel(panel: Panel | undefined): void

  onZoom(inc: number): void

}

export const ImageMenubar = (props: ImageMenubarProps) => {

  const [panel, setPanel] = useState<Panel | undefined>(undefined);

  const toggle = (p: Panel) => () => {
    const next = p === panel ? undefined : p;

    setPanel(next);
    props.onChangePanel(next);
  }

  return (
    <div className={panel === undefined ? 'ia-menubar ia-overlay collapsed' : 'ia-menubar ia-overlay'}>
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
          className={panel === Panel.ANNOTATIONS ? 'active' : undefined}
          onClick={toggle(Panel.ANNOTATIONS)}>
          <Chats />
        </button>

        <button
          className={panel === Panel.LAYERS ? 'active' : undefined}
          onClick={toggle(Panel.LAYERS)}>
          <StackSimple />
        </button>

        <button
          className={panel === Panel.SEARCH ? 'active' : undefined}
          onClick={toggle(Panel.SEARCH)}>
          <MagnifyingGlass />
        </button>

        <button
          className={panel === Panel.HISTORY ? 'active' : undefined}
          onClick={toggle(Panel.HISTORY)}>
          <ClockCounterClockwise />
        </button>
      </section>
    </div>
  )

}