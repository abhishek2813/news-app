'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
const ListView = ({ articles }) => {
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
        // Retrieve favorites from localStorage on initial load
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      }, []);
    return (
        <div className="list-view">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">description</th>
                        <th scope="col">Author</th>
                        <th scope="col">View</th>
                        <th scope="col">favorites</th>
                    </tr>
                </thead>
                <tbody>
                    {articles && articles.map((val, i) => (
                        <tr>
                            <th scope="row">{i + 1}</th>
                            <td> <img
                                src={!val.urlToImage ? "https://gumlet.assettype.com/bloombergquint%2F2019-06%2Feb7600fb-e0ec-47f6-bfae-009941cae449%2F323324904_1_5__3_.jpg?rect=0%2C0%2C4000%2C2100&w=1200&auto=format%2Ccompress&ogImage=true" : val.urlToImage}
                                width={50}
                                height={50}
                                className="rounded"
                                alt="..."
                            /></td>
                            <td>{val.title}</td>
                            <td>{val.description ? val.description : "No description Found "}</td>
                            <td>By {!val.author ? "Unknown" : val.author} on {new Date(val.publishedAt).toGMTString()}</td>
                            <td>
                                <Link
                                    href={val.url}
                                >
                                    Read More...</Link></td>
                            <td>
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
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default ListView;
