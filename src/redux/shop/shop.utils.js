import SHOP_DATA from "./SHOP_DATA"

const selectShop = state => state.shop;
console.log(selectShop)

export const selectCollection = (collectionUrlParam) => {
    return SHOP_DATA[collectionUrlParam];
};

export const selectCollectionsForPreview = (collections) => {
    return Object.keys(collections).map(key => collections[key])
};
