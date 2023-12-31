'use client'
import React, { useEffect, useState } from 'react';
import GridView from '@/app/componets/GridView';
import ListView from '@/app/componets/ListView';

const Page = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [articles, setArticles] = useState([]);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  const country = 'us';
  const apiKey = '09d603374172456c90bbab00eb1dd9c4';

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=${apiKey}`;

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container my-3'>
      <div className='row'>
        <div className='col-md-6 text-center'>
          <button className="btn btn-primary" onClick={toggleView} >
          'Grid View'
          </button>
          
        </div>
        <div className='col-md-6 text-center'>
          <button className="btn btn-primary" onClick={toggleView}>
          'List View'
          </button>
          
        </div>
        <div className='container my-2'>
        {isGridView ? <GridView articles={articles} /> : <ListView articles={articles} />}
        </div>
      </div>
    </div>
  );
};

export default Page;
