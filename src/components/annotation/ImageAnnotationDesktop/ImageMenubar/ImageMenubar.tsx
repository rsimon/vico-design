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
        <button>
          <Chats />
        </button>

        <button>
          <StackSimple />
        </button>

        <button>
          <MagnifyingGlass />
        </button>

        <button>
          <ClockCounterClockwise />
        </button>
      </section>
    </div>
  )

}