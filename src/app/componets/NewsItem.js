import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsItem = ({ articles }) => {
  let { title, drce, urlToImage, url, author, publishedAt } = articles;
  return (
    <div className=''>
      <div className="card">
        <img
          src={!urlToImage ? "https://gumlet.assettype.com/bloombergquint%2F2019-06%2Feb7600fb-e0ec-47f6-bfae-009941cae449%2F323324904_1_5__3_.jpg?rect=0%2C0%2C4000%2C2100&w=1200&auto=format%2Ccompress&ogImage=true" : urlToImage}
          width={400}
          height={200}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{drce}</p>
          <p className="card-text"><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString()}</small></p>
          <Link href={url} className="btn btn-sm btn-primary">Read More...</Link>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
