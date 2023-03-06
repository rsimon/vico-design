import * as RadixAvatar from '@radix-ui/react-avatar';
import type { User } from 'src/types';

interface AvatarProps {

  user: User;

  color?: string;

  border?: boolean

  size?: number

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

const stringToHue = (str: string) => {
  let hash = 0;
  
  for (let i=0; i<str.length; i++)
    hash = str.charCodeAt(i) + ((hash << 5) - hash);

  // return `radial-gradient(hsl(${hash % 360}, 35%, 65%), hsl(${hash % 360}, 35%, 45%))`; 
  return hash % 360; 
}

export const Avatar = (props: AvatarProps) => {

  const { border, color, user  } = props;

  const size = props.size || 42.5;

  const hue = stringToHue(user.id);

  return (
    <RadixAvatar.Root 
      className="avatar" 
      style={{ backgroundColor: color, height: size, width: size }}>
      {user.avatarUrl &&
        <RadixAvatar.Image
          className="avatar-image"
          src={user.avatarUrl}
          alt={user.fullname || user.id} 
          style={{
            height: Math.floor(size - 4),
            left: 2,
            top: 2,
            width: Math.floor(size - 4)
          }}/>
      }

      <RadixAvatar.Fallback 
        className="avatar-fallback"
        style={{ 
          backgroundColor: `hsl(${hue}, 35%, 54%)`,
          height: Math.floor(size - 4),
          left: 2,
          top: 2,
          width: Math.floor(size - 4)
        }}>
        <div 
          className="avatar-fallback-inner"
          style={{ 
            background: `radial-gradient(hsl(${hue}, 35%, 78%), hsl(${hue}, 35%, 67%))`,
            backgroundColor: `hsl(${hue}, 35%, 78%)`,
            height: border ? Math.floor(size - 6) : Math.floor(size - 4),
            left: border ? 1 : 0,
            top: border ? 1 : 0,
            width: border ? Math.floor(size -6) : Math.floor(size - 4)
          }}>
          {getInitials(user)}
        </div>
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
  
}