import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route, Routes } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../components/firebase/firebase.utils";
import { fetchCollectionsSuccess } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";

//change to a class component

class Shop extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapShot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      }
    );
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    console.log(match);

    return (
      <div className="shop-page">
        {loading ? <Spinner /> : <CollectionsOverview />}
        <Routes>
          {loading ? (
            <Route exact path="/spinner" element={<Spinner />} />
          ) : (
            <Route exact path="/shop" element={<CollectionsOverview />} />
          )}
          {/* <Route exact path="/shop" element={<CollectionsOverview />} /> */}
          <Route path={`shop/:collectionId`} element={<CollectionPage />} />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(fetchCollectionsSuccess(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
