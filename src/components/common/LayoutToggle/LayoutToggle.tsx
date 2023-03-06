import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { CaretDown, Check, SquaresFour, Table } from 'phosphor-react';

const { Content, ItemIndicator, Portal, RadioGroup, RadioItem, Root, Trigger } = Dropdown;

export const LayoutToggle = () => {

  return (
    <Root>
      <Trigger asChild>
        <button className="small" aria-hidden={true}>
          <span>Layout</span> <CaretDown weight="bold" />
        </button>
      </Trigger>

      <Portal>
        <Content className="dropdown-content" sideOffset={5} align="end">
          <RadioGroup value="table">
            <RadioItem value="table" className="dropdown-item">
              <ItemIndicator className="dropdown-indicator">
                <Check />
              </ItemIndicator>
              <Table weight="light" /> <span>Table Layout</span>
            </RadioItem>

            <RadioItem value="grid" className="dropdown-item">
              <ItemIndicator className="dropdown-indicator">
                <Check />
              </ItemIndicator>
              <SquaresFour weight="light" /> <span>Grid Layout</span>
            </RadioItem>
          </RadioGroup>
        </Content>
      </Portal>
    </Root>
  )

}