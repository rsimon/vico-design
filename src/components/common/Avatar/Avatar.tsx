import * as RadixAvatar from '@radix-ui/react-avatar';
import type { User } from 'src/types';

interface AvatarProps {

  user: User;

}

const getInitials = (user: User): string => {
  if (user.fullname) {
    const tokens = user.fullname.split(/\s+/);
    if (tokens.length === 1) {
      return tokens[0].charAt(0).toUpperCase();
    } else {
      return (tokens[0].charAt(0) + tokens[tokens.length - 1].charAt(0)).toUpperCase();
    }
  } else {
    return user.id.charAt(0).toUpperCase();
  }
}

const stringToHslColor = (str: string) => {
  let hash = 0;
  
  for (let i=0; i<str.length; i++)
    hash = str.charCodeAt(i) + ((hash << 5) - hash);

  return `hsl(${hash % 360}, 35%, 65%)`; 
}

export const Avatar = (props: AvatarProps) => {

  const { user  } = props;

  return (
    <RadixAvatar.Root className="avatar">
      {user.avatarUrl &&
        <RadixAvatar.Image
          className="avatar-image"
          src={user.avatarUrl}
          alt={user.fullname || user.id} />
      }

      <RadixAvatar.Fallback 
        className="avatar-fallback"
        style={{ backgroundColor: stringToHslColor(user.id) }}>
        {getInitials(user)}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
  
}