import { useState } from 'react';
import Sidebar from "./adminComponents/Sidebar";
import './adminComponents/componentscss.css'

const Flights = () => {
  const [showSidebar, onSetShowSidebar] = useState(false);
  return (
    <div className="flex">
      <Sidebar
        onSidebarHide={() => {
          onSetShowSidebar(false);
        }}
        showSidebar={showSidebar}
      />
      
    </div>
  );
}

export default Flights;