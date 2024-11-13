import React, { useState } from 'react';

const mockContent = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Mock Video ${i + 1}`,
  visibility: 'Unlisted',
  restrictions: 'Made for Kids',
  date: '17 Jun 2024',
  views: Math.floor(Math.random() * 1000),
  comments: Math.floor(Math.random() * 100),
  likes: Math.floor(Math.random() * 100),
}));

const mockReels = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Mock Reel ${i + 1}`,
  date: '17 Jun 2024',
  views: Math.floor(Math.random() * 1000),
  likes: Math.floor(Math.random() * 100),
}));

const mockLive = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  title: `Live Stream ${i + 1}`,
  date: '17 Jun 2024',
  viewers: Math.floor(Math.random() * 500),
  comments: Math.floor(Math.random() * 50),
}));

const mockPromotion = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  title: `Promotion ${i + 1}`,
  date: '17 Jun 2024',
  budget: `$${Math.floor(Math.random() * 1000)}`,
  clicks: Math.floor(Math.random() * 500),
}));

const mockPost = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  title: `Post ${i + 1}`,
  date: '17 Jun 2024',
  engagement: Math.floor(Math.random() * 100),
}));

const Content = () => {
  const [activeTab, setActiveTab] = useState('Videos');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Videos':
        return (
          <div className="flex flex-col">
           <div className="flex space-x-4 text-center bg-gray-700 py-2 mb-2">
              <div className="w-20 pl-100">
                <p className="text-sm text-gray-300">Visibility</p>
              </div>
              <div className="w-20">
                <p className="text-sm text-gray-300">Restrictions</p>
              </div>
              <div className="w-20">
                <p className="text-sm text-gray-300">Date</p>
              </div>
              <div className="w-20">
                <p className="text-sm text-gray-300">Views</p>
              </div>
              <div className="w-20">
                <p className="text-sm text-gray-300">Comments</p>
              </div>
              <div className="w-20">
                <p className="text-sm text-gray-300">Likes</p>
              </div>
            </div>
            {mockContent.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-gray-800 p-2 rounded-md mb-2">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-600"></div>
                  <div>
                    <h4 className="text-lg font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-400">Add description</p>
                  </div>
                </div>
                <div className="flex space-x-4 text-center">
                  <div className="w-20">
                    <p>{item.visibility}</p>
                  </div>
                  <div className="w-20">
                    <p>{item.restrictions}</p>
                  </div>
                  <div className="w-20">
                    <p>{item.date}</p>
                  </div>
                  <div className="w-20">
                    <p>{item.views}</p>
                  </div>
                  <div className="w-20">
                    <p>{item.comments}</p>
                  </div>
                  <div className="w-20">
                    <p>{item.likes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'Reels':
        return (
          <div className="flex flex-col">
           <div className="flex space-x-4 text-center bg-gray-700 py-2 mb-2">
              <div className="w-20 pl-100">
                <p className="text-sm text-gray-300">Date</p>
              </div>
              <div className="w-20">
                <p className="text-sm text-gray-300">Views</p>
              </div>
              <div className="w-20">
                <p className="text-sm text-gray-300">Likes</p>
              </div>
            </div>
            {mockReels.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-gray-800 p-2 rounded-md mb-2">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-600"></div>
                  <div>
                    <h4 className="text-lg font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-400">Add description</p>
                  </div>
                </div>
                <div className="flex space-x-4 text-center">
                  <div className="w-20">
                    <p>{item.date}</p>
                  </div>
                  <div className="w-20">
                    <p>{item.views}</p>
                  </div>
                  <div className="w-20">
                    <p>{item.likes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'Live':
        return (
          <div className="flex flex-col">
           <div className="flex space-x-4 text-center bg-gray-700 py-2 mb-2">
              <div className="w-20">
                <p className="text-sm text-gray-300">Date</p>
              </div>
              <div className="w-20">
                <p className="text-sm text-gray-300">Viewers</p>
              </div>
              <div className="w-20">
                <p className="text-sm text-gray-300">Comments</p>
              </div>
            </div>
            {mockLive.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-gray-800 p-2 rounded-md mb-2">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-600"></div>
                  <div>
                    <h4 className="text-lg font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-400">Live Stream</p>
                  </div>
                </div>
                <div className="flex space-x-4 text-center">
                  <div className="w-20">
                    <p>{item.date}</p>
                  </div>
                  <div className="w-20">
                    <p>{item.viewers}</p>
                  </div>
                  <div className="w-20">
                    <p>{item.comments}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'Promotion':
        return (
          <div className="flex flex-col">
            <div className="flex space-x-4 text-center bg-gray-700 py-2 mb-2">
              <div className="w-20">
                <p className="text-sm text-gray-300">Date</p>
              </div>
              <div className="w-20">
                <p className="text-sm text-gray-300">Budget</p>
              </div>
              <div className="w-20">
                <p className="text-sm text-gray-300">Clicks</p>
              </div>
            </div>
            {mockPromotion.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-gray-800 p-2 rounded-md mb-2">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-600"></div>
                  <div>
                    <h4 className="text-lg font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-400">Promotion</p>
                  </div>
                </div>
                <div className="flex space-x-4 text-center">
                  <div className="w-20">
                    <p>{item.date}</p>
                  </div>
                  <div className="w-20">
                    <p>{item.budget}</p>
                  </div>
                  <div className="w-20">
                    <p>{item.clicks}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'Post':
        return (
          <div className="flex flex-col">
            <div className="flex space-x-4 text-center bg-gray-700 py-2 mb-2">
              <div className="w-20">
                <p className="text-sm text-gray-300">Date</p>
              </div>
              <div className="w-20">
                <p className="text-sm text-gray-300">Engagement</p>
              </div>
            </div>
            {mockPost.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-gray-800 p-2 rounded-md mb-2">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-600"></div>
                  <div>
                    <h4 className="text-lg font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-400">Social Media Post</p>
                  </div>
                </div>
                <div className="flex space-x-4 text-center">
                  <div className="w-20">
                    <p>{item.date}</p>
                  </div>
                  <div className="w-20">
                    <p>{item.engagement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-4 bg-gray-900 text-gray-100 rounded-md">
      <h1 className="text-2xl font-bold">Channel Content</h1>
      <div className="flex space-x-6 border-b border-gray-700 pb-2 mt-4">
        {['Reels', 'Live', 'Post', 'Promotion'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-lg font-semibold pb-2 ${
              activeTab === tab ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default Content;
