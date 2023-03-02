import { ArrowUUpLeft, ArrowUUpRight, BoundingBox, Circle, CrosshairSimple, Polygon } from 'phosphor-react';

import './ImageToolbar.css';

interface ImageToolbarProps {

  // for future use

}

export const ImageToolbar = (props: ImageToolbarProps) => {

  return (
    <div className="ia-toolbar-wrapper">
      <div className="ia-toolbar">
        <section>
          <ArrowUUpLeft />
          <ArrowUUpRight />
        </section>

        <section>
          <CrosshairSimple />
          <BoundingBox />
          <Polygon />
          <Circle />
        </section>
      </div>
    </div>
  )

}