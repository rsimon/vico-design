import { Minus, Plus } from 'phosphor-react';

import './ZoomControl.css';

interface ZoomControlProps {

}

export const ZoomControl = (props: ZoomControlProps) => {

  return (
    <div className="ia-zoom ia-overlay">
      <button>
        <Plus />
      </button>

      <div className="ia-overlay-divider ia-overlay-divider-h" />

      <button>
        <Minus />
      </button>
    </div>
  )

}