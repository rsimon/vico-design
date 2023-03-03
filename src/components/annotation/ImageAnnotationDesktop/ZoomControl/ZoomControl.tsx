import { Minus, Plus } from 'phosphor-react';

import './ZoomControl.css';

interface ZoomControlProps {

  onZoom(inc: number): void

}

export const ZoomControl = (props: ZoomControlProps) => {

  return (
    <div className="ia-zoom ia-overlay">
      <button onClick={() => props.onZoom(1.2)}>
        <Plus />
      </button>

      <button onClick={() => props.onZoom(0.8)}>
        <Minus />
      </button>
    </div>
  )

}