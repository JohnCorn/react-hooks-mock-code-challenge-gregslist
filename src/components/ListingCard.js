import React, {useState} from "react";

function ListingCard({ listing,  onRemoveListing}) {
  const [like, setLike] = useState(false);

  function HandleRemove()
  {
    onRemoveListing(listing.id);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img 
        src={listing.image} 
        alt={listing.description} />
      </div>
      <div className="details">
        {like ? (
          <button 
          onClick={() => setLike(false)}
          className="emoji-button favorite active">★</button>
        ) : (
          <button 
          onClick={() => setLike(true)}
          className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>

        <button 
          onClick={HandleRemove}
          className="emoji-button delete">🗑️
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
