import SHOP_DATA from "./SHOP_DATA"

export const selectCollection = (collectionUrlParam) => {
    return SHOP_DATA[collectionUrlParam];
};

export const selectCollectionsForPreview = (collections) => {
    return Object.keys(collections).map(key => collections[key])
};
