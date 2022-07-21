
import { createSelector } from "reselect";

const selectShop = state => state.shop;
export const selectShopItems = createSelector([selectShop], (item) =>
  console.log(item)
);


export const selectCollection = (collections, collectionUrlParam) => {
    return collections[collectionUrlParam];
};

export const selectCollectionsForPreview = (collections) => {
    return collections ? Object.keys(collections).map(key => collections[key]) : []
};

