import { useEffect, useRef } from 'react';
import OpenSeadragon from 'openseadragon';
import { AvatarOverlay } from './AvatarOverlay/AvatarOverlay';

import './ImageAnnotationDesktop.css';

interface ImageAnnotationDesktopProps {

  // for future use

}

const DUMMY_IMAGE = {
  "@context" : "http://iiif.io/api/image/2/context.json",
  "protocol" : "http://iiif.io/api/image",
  "width" : 7808,
  "height" : 5941,
  "sizes" : [
     { "width" : 244, "height" : 185 },
     { "width" : 488, "height" : 371 },
     { "width" : 976, "height" : 742 }
  ],
  "tiles" : [
     { "width" : 256, "height" : 256, "scaleFactors" : [ 1, 2, 4, 8, 16, 32 ] }
  ],
  "@id" : "https://iiif.bodleian.ox.ac.uk/iiif/image/af315e66-6a85-445b-9e26-012f729fc49c",
  "profile" : [
     "http://iiif.io/api/image/2/level2.json",
     { "formats" : [ "jpg", "png", "webp" ],
       "qualities" : ["native","color","gray","bitonal"],
       "supports" : ["regionByPct","regionSquare","sizeByForcedWh","sizeByWh","sizeAboveFull","sizeUpscaling","rotationBy90s","mirroring"],
       "maxWidth" : 1000,
       "maxHeight" : 1000
     }
  ]
};

export const ImageAnnotationDesktop = (props: ImageAnnotationDesktopProps) => {

  const osd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (osd.current) {
      const viewer = OpenSeadragon({
        element: osd.current,
        prefixUrl: 'https://cdn.jsdelivr.net/npm/openseadragon@3.1/build/openseadragon/images/',
        tileSources: DUMMY_IMAGE,
        gestureSettingsMouse: {
          clickToZoom: false
        }, 
        showNavigationControl: false
      }); 
    }
  }, [ osd.current ])

  return (
    <div className="ia-desktop-container">
      <div ref={osd} className="ia-osd-container">
        {/* OSD mounts here */}
      </div>

      <AvatarOverlay />
    </div>
  )

}