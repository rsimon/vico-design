import { ReactElement, useState } from 'react';
import { 
  ArrowClockwise, 
  ArrowCounterClockwise,  
  Circle, 
  CrosshairSimple, 
  Cursor,
  DotsThreeVertical,
  Lock,
  Rectangle,
  Triangle
} from 'phosphor-react';

import './ImageToolbar.css';

interface ToolButtonProps {

  name: string;

  active: string;

  setActive(s: string): void;

  children: ReactElement;

}

const ToolButton = (props: ToolButtonProps) => {

  return (
    <button 
      className={props.active === props.name ? 'active' : undefined}
      onClick={() => props.setActive(props.name)}>
      {props.children}
    </button>
  )

}

interface ImageToolbarProps {

  // for future use

}

export const ImageToolbar = (props: ImageToolbarProps) => {

  const [ active, setActive ] = useState('cursor');

  return (
    <div className="ia-toolbar-wrapper">
      <div className="ia-toolbar ia-overlay">
        <section>
          <button>
            <ArrowCounterClockwise weight="bold" />
          </button>

          <button>
            <ArrowClockwise weight="bold" />
          </button>
        </section>

        <div className="ia-toolbar-separator" />

        <section>
          <ToolButton active={active} setActive={setActive} name="cursor">
            <Cursor weight="bold" />
          </ToolButton>

          <ToolButton active={active} setActive={setActive} name="point">
            <CrosshairSimple weight="bold" />
          </ToolButton>

          <ToolButton active={active} setActive={setActive} name="rectangle">
            <Rectangle weight="bold" />
          </ToolButton>

          <ToolButton active={active} setActive={setActive} name="triangle">
            <Triangle weight="bold" />
          </ToolButton>

          <ToolButton active={active} setActive={setActive} name="circle">
            <Circle weight="bold" />
          </ToolButton>
        </section>

        <div className="ia-toolbar-separator" />

        <section>
          <button>
            <DotsThreeVertical weight="bold" />
          </button>
        </section>

        <div className="ia-toolbar-separator" />

        <section className="visibility">
          <button>
            <Lock />
            <span>Private</span>
          </button>
        </section>
      </div>
    </div>
  )

}