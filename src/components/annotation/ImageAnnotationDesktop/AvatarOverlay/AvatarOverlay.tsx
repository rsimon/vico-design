import { AvatarList } from '@components/common';

import './AvatarOverlay.css';

const DUMMY_COLLABORATORS = [{
  id: 'aboutgeo',
  fullname: 'Rainer Simon'
},{
  id: 'colmtuite',
  fullname: 'Colm Tuite',
  avatarUrl: 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
},{
  id: 'jamie',
  fullname: 'Jamie Folsom'
},{
  id: 'lorin',
  fullname: 'Lorin Jameson'
},{
  id: 'ben',
  fullname: 'Ben Silverman'
}];

interface AvatarOverlayProps {

  // for future use

}

export const AvatarOverlay = (props: AvatarOverlayProps) => {

  return (
    <div className="ia-overlay ia-avatar-overlay">
      <AvatarList users={DUMMY_COLLABORATORS} />
    </div>
  ) 

}