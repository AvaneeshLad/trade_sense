import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RecentlyVisited.css';
import axios from 'axios';

const RecentlyVisited = ({userId}) => {
  const [recent, setRecent] = useState([]);
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const baseURL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchRecentlyVisited = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/recentlyVisited/${currentUser.id}`);
        const data = Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data.data)
          ? res.data.data
          : [];
  
        setRecent(data);
      } catch (error) {
        console.error('Failed to fetch recently visited:', error);
        setRecent([]); // fallback to avoid broken UI
      }
    };
  
    if (currentUser?.id) {
      fetchRecentlyVisited();
    }
  }, [userId]);

  const handleClick = (symbol, name) => {
    navigate(`/dashboard?symbol=${encodeURIComponent(symbol)}&name=${encodeURIComponent(name)}`);
  };

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 300;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="p-4 relative">
      {recent.length === 0 ? (
        <p className="text-gray-500">No recently visited items.</p>
      ) : (
        <div className="carousel-wrapper">
          <button className="scroll-button left" onClick={() => scroll('left')}>&lt;</button>
          <ul className="space-y-2 no-scrollbar" ref={scrollRef}>
            {recent.map(({ symbol, companyName }, index) => (
              <li
                key={`${symbol}-${index}`}
                onClick={() => handleClick(symbol, companyName)}
                className="cursor-pointer"
              >
                <span className="font-medium">{companyName}</span>
              </li>
            ))}
          </ul>
          <button className="scroll-button right" onClick={() => scroll('right')}>&gt;</button>
        </div>
      )}
    </div>
  );
};

export default RecentlyVisited;
