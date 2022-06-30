import React from "react";
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import { Route, Routes } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import { firestore, convertCollectionsSnapshotToMap } from "../../components/firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";

//change to a class component

class Shop extends React.Component {

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(
      async (snapShot) => {const collectionsMap = convertCollectionsSnapshotToMap(snapShot)
      updateCollections(collectionsMap)}
    );
  }
  render () {
    const {match} = this.props;
  console.log(match);

    return (
    <div className="shop-page">
      <CollectionsOverview/>
      <Routes>
        <Route exact path='/shop' element={<CollectionsOverview />} />
        <Route path={`shop/:collectionId`} element={<CollectionPage />} />
      </Routes>
    </div>
  );
  }
}

const mapDispatchToProps = dispatch =>( {
  updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop);
