'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
const GridView = ({ articles }) => {
  const [favorites, setFavorites] = useState([])
  const handleAddToFavorites = (article) => {
    const updatedFavorites = [...favorites, article];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };
  const isArticleInFavorites = (article) => {
    return favorites.some((fav) => fav.publishedAt === article.publishedAt);
  };
  const handleRemoveFromFavorites = (article) => {
    const updatedFavorites = favorites.filter((fav) => fav.publishedAt !== article.publishedAt);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <div className="row">
      {articles && articles.map((val) => (
        <div key={val.urlToImage} className="col-md-4">
          <div className="card">
            <img
              src={!val.urlToImage ? "https://gumlet.assettype.com/bloombergquint%2F2019-06%2Feb7600fb-e0ec-47f6-bfae-009941cae449%2F323324904_1_5__3_.jpg?rect=0%2C0%2C4000%2C2100&w=1200&auto=format%2Ccompress&ogImage=true" : val.urlToImage}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{val.title}</h5>
              <p className="card-text">{val.description ? val.description : "No description Found "}</p>
              <p className="card-text"><small className='text-muted'>By {!val.author ? "Unknown" : val.author} on {new Date(val.publishedAt).toGMTString()}</small></p>
              <div className='row'>
                <div className='col-6'>

                  <Link href={val.url} className="btn btn-sm btn-primary">Read More...</Link>

                </div>
                <div className='col-6'>
                  {isArticleInFavorites(val) ? (
                    <button className="btn btn-sm btn-danger" onClick={() => handleRemoveFromFavorites(val)}>Remove from Favorites</button>
                  ) : (
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleAddToFavorites(val)}
                    >
                      Add to Favorites
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridView;
