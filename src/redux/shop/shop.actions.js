import shopActionTypes from './shop.types';

export const updateCollections = (collectionsMap) => {
  return {
    type: shopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap,
  };
};