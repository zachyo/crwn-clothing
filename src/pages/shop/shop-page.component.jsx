import React from "react";
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import { Route, Routes } from "react-router-dom";
import CollectionPage from "../collection/collection.component";


const Shop = ({match}) => {
  console.log(match)
  return (
    <div className="shop-page">
      <CollectionsOverview/>
      <Routes>
        <Route exact path='/shop' element={<CollectionsOverview />} />
        <Route path={`shop/:collectionId`} element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default Shop;
