import { 
  ArrowClockwise, 
  ArrowCounterClockwise,  
  Circle, 
  CrosshairSimple, 
  DotsThreeVertical,
  Lock,
  Rectangle,
  Triangle
} from 'phosphor-react';

import './ImageToolbar.css';

interface ImageToolbarProps {

  // for future use

}

export const ImageToolbar = (props: ImageToolbarProps) => {

  return (
    <div className="ia-toolbar-wrapper">
      <div className="ia-toolbar">
        <section>
          <button>
            <ArrowCounterClockwise weight="bold" />
          </button>

          <button>
            <ArrowClockwise weight="bold" />
          </button>
        </section>

        <section>
          <button>
            <CrosshairSimple weight="bold" />
          </button>

          <button className="active">
            <Rectangle weight="bold" />
          </button>

          <button>
            <Triangle weight="bold" />
          </button>

          <button>
            <Circle weight="bold" />
          </button>
        </section>

        <section>
          <button>
            <DotsThreeVertical weight="bold" />
          </button>
        </section>

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