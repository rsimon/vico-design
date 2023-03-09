import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { DotsThreeOutlineVertical } from 'phosphor-react';

const { Content, Item, Portal, Root, Trigger } = Dropdown;

export const ActionsMenu = () => {

  return (
    <Root>
      <Trigger asChild>
        <button className="unstyled">
          <DotsThreeOutlineVertical weight="fill" />
        </button>
      </Trigger>

      <Portal>
        <Content className="dropdown-content no-icons" sideOffset={5} align="end">
          <Item className="dropdown-item">
            <span>Get link to this annotation</span>
          </Item>
        </Content>
      </Portal>
    </Root>
  )

}