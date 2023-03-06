import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { CaretDown, Check, Detective, UsersThree } from 'phosphor-react';

const { Content, ItemIndicator, Portal, RadioGroup, RadioItem, Root, Separator, Trigger } = Dropdown;

export const VisibilityControl = () => {

  // <CaretDown weight="bold" />

  return (
    <Root>
      <Trigger asChild>
        <button className="visibility active">
          <Detective />
          <span>Private</span>   
          <CaretDown weight="bold" className="small-caret-right" />
        </button>
      </Trigger>

      <Portal>
        <Content className="dropdown-content wide" sideOffset={5} align="center">
          <RadioGroup value="table">
            <RadioItem value="table" className="dropdown-item">
              <ItemIndicator className="dropdown-indicator">
                <Check />
              </ItemIndicator>
              <Detective /> <strong>Private</strong>
              <p>
                Annotations you create in Private mode will be visible
                to <strong>no-one except you</strong>.
              </p>
            </RadioItem>

            <RadioItem value="grid" className="dropdown-item">
              <ItemIndicator className="dropdown-indicator">
                <Check />
              </ItemIndicator>
              <UsersThree /> <strong>Public</strong>
              <p>
                Public annotations are visible to anyone with
                access to this document. This may include <strong>invited
                users or the general public</strong>.
              </p>
            </RadioItem>
          </RadioGroup>
        </Content>
      </Portal>
    </Root>
  )

}