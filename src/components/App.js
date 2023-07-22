import React, { useEffect, useState }  from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(response => response.json())
    .then(data => {
      console.log("data", data);
      setListings(data);
    })
  }, []);


  function onRemoveListing(itemID)
  {
    console.log("App onRemoveListing")

    fetch(`http://localhost:6001/listings/${itemID}`, 
    { 
      method: 'DELETE' 
    })
    .then(() =>console.log('Delete successful'));
  }

  const displayedListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header setSearch={setSearch}/>
      <ListingsContainer 
      listings={displayedListings}
      onRemoveListing={onRemoveListing}
      />
    </div>
  );
}

export default App;
