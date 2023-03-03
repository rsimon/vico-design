import { Avatar } from '@components/common';
import { COLORS_12 } from './Palette';

import './PresenceOverlay.css';

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

// 

export const PresenceOverlay = () => {

  return (
    <div className="ia-presence">
      <ul>
        {DUMMY_COLLABORATORS.map((user, idx) => 
          <li key={user.id}>
            <div className="avatar-outline">
              <Avatar user={user} color={COLORS_12[idx % COLORS_12.length]} />
            </div>
          </li>
        )}
      </ul>
    </div>
  ) 

}