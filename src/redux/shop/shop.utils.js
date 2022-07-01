import { connect } from "react-redux";
import SHOP_DATA from "./SHOP_DATA"

import { createSelector } from "reselect";

const selectShop = state => state.shop;
export const selectShopItems = createSelector([selectShop], (item) =>
  console.log(item)
);


export const selectCollection = (collectionUrlParam) => {
    return SHOP_DATA[collectionUrlParam];
};

export const selectCollectionsForPreview = (collections) => {
    return collections ? Object.keys(collections).map(key => collections[key]) : []
};

const mapStateToProps = (store) => ({
  collections: store.shop.collections,
});

export default connect(mapStateToProps) (selectCollection);