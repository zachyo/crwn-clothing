import shopActionTypes from "./shop.types";
import { call, put, takeLatest } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../components/firebase/firebase.utils";

import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapShot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
    yield console.log("I am fired");
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
  yield console.log("I am fired");
}
