import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineBarChart, AiOutlineSetting } from 'react-icons/ai';
import { MdContentPaste, MdComment, MdSubtitles, MdCopyright, MdFeedback, MdMessage } from 'react-icons/md';
import { Link } from 'react-router-dom';



const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex flex-col h-[130h] bg-gray-900 text-gray-100 ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
      {/* Hamburger Icon */}
      <div className="flex items-center justify-start p-4">
  <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
    <AiOutlineMenu />
  </button>
  {isOpen && (
    <h1 className="ml-4 text-lg font-semibold text-left">Dashboard</h1>
  )}
</div>


      {/* Profile Section */}
      {isOpen && (
        <div className="flex flex-col items-center mt-4">
          <img
            src="data:image/jpeg;base64,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"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <h2 className="mt-2 text-sm font-semibold">Beyonce</h2>
        </div>
      )}

      {/* Menu Items */}
      <div className="flex flex-col mt-8 space-y-4">
      <Link to="/dashboard" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
          <AiOutlineHome className="text-xl" />
          {isOpen && <span className="ml-4">Home</span>}
        </Link>
        <Link to="/analytics" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
          <AiOutlineBarChart className="text-xl" />
          {isOpen && <span className="ml-4">Analytics</span>}
        </Link>
        <Link to="/content" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
        <MdContentPaste className="text-xl" />
          {isOpen && <span className="ml-4">Content</span>}
        </Link>
{/* 
        <button className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
          <MdContentPaste className="text-xl" />
          {isOpen && <span className="ml-4">Content</span>}
        </button> */}

<Link to="/comments" className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
          <MdComment className="text-xl" />
          {isOpen && <span className="ml-4">Comments</span>}
        </Link>

        <button className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
          <MdMessage className="text-xl" />
          {isOpen && <span className="ml-4">Dm's</span>}
        </button>

        <button className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
          <MdCopyright className="text-xl" />
          {isOpen && <span className="ml-4">Copyright</span>}
        </button>

        <button className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
          <MdFeedback className="text-xl" />
          {isOpen && <span className="ml-4">Feedback</span>}
        </button>

        <button className="flex items-center px-4 py-2 hover:bg-gray-700 rounded-lg">
          <AiOutlineSetting className="text-xl" />
          {isOpen && <span className="ml-4">Settings</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
