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

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setArticles(JSON.parse(storedFavorites));
    }
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
