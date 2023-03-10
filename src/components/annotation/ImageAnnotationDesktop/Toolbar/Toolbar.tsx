import { ReactElement, useState } from 'react';
import { VisibilityToggle } from './VisibilityToggle';
import { 
  ArrowClockwise, 
  ArrowCounterClockwise,  
  Circle, 
  CrosshairSimple, 
  Cursor,
  DotsThreeVertical,
  Rectangle,
  Triangle
} from 'phosphor-react';

import './Toolbar.css';

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

export const Toolbar = () => {

  const [ active, setActive ] = useState('cursor');

  return (
    <div className="ia-toolbar ia-overlay">
      <section>
        <button>
          <ArrowCounterClockwise weight="bold" />
        </button>

        <button>
          <ArrowClockwise weight="bold" />
        </button>
      </section>

      <div className="ia-overlay-divider ia-overlay-divider-v" />

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

      <div className="ia-overlay-divider ia-overlay-divider-v" />

      <section>
        <button>
          <DotsThreeVertical weight="bold" />
        </button>
      </section>

      <div className="ia-overlay-divider ia-overlay-divider-v" />

      <section className="visibility">
        <VisibilityToggle />
      </section>
    </div>
  )

}