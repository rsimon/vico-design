import { Avatar } from '../Avatar/Avatar';
import type { User } from 'src/types';

interface AvatarListProps {

  users: Array<User>;

  hideAfter?: number;

}

export const AvatarList = (props: AvatarListProps) => {

  const len = props.hideAfter || 5;

  const head = props.users.slice(0, len);

  const remainder = props.users.length - len;

  return (
    <p className="avatar-list">
      <ul>
        {head.map(user => 
          <li key={user.id}>
            <Avatar user={user} />
          </li>
        )}
      </ul>
      {remainder > 0 && <span>+{remainder}</span>}
    </p>
  )

}