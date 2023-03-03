import { Chats } from 'phosphor-react';

import './RightSidebarTrigger.css';

export const RightSidebarTrigger = () => {

  return (
    <div className="ia-overlay ia-right-trigger">
      <button>
        <Chats weight="bold" />
      </button>
    </div>
  )

}