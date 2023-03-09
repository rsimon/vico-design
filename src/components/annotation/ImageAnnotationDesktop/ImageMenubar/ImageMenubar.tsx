import { useState } from 'react';
import { 
  Chats,
  ClockCounterClockwise,
  MagnifyingGlass,
  Minus, 
  Plus, 
  StackSimple
} from 'phosphor-react';

import './ImageMenubar.css';

interface ImageMenubarProps {

  onZoom(inc: number): void

}

export const ImageMenubar = (props: ImageMenubarProps) => {

  const [activePanel, setActivePanel] = useState<string | null>(null);

  const toggle = (panel: string) => () => {
    if (activePanel === panel)
      setActivePanel(null);
    else 
      setActivePanel(panel);
  }

  return (
    <div className="ia-menubar ia-overlay">
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
          className={activePanel === 'annotations' ? 'active' : undefined}
          onClick={toggle('annotations')}>
          <Chats />
        </button>

        <button
          className={activePanel === 'layers' ? 'active' : undefined}
          onClick={toggle('layers')}>
          <StackSimple />
        </button>

        <button
          className={activePanel === 'search' ? 'active' : undefined}
          onClick={toggle('search')}>
          <MagnifyingGlass />
        </button>

        <button
          className={activePanel === 'history' ? 'active' : undefined}
          onClick={toggle('history')}>
          <ClockCounterClockwise />
        </button>
      </section>
    </div>
  )

}