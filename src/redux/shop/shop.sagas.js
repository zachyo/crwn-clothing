import shopActionTypes from "./shop.types";
// import {takeEvery, call ,put} from 'redux-sagas/effects';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../components/firebase/firebase.utils";

import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  yield console.log("I am fired");

  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield convertCollectionsSnapshotToMap(snapShot);
    yield fetchCollectionsSuccess(collectionsMap);
  } catch (error) {

    yield fetchCollectionsFailure(error.message)
  }
}

export function* fetchCollectionsStart() {
  // yield takeEvery( shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}
