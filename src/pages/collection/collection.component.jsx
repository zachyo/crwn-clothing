import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionItemComponent from '../../components/collection-item/collection-item.component';
import {selectCollection} from '../../redux/shop/shop.utils';
import './collection.styles.scss';


const CollectionPage = ({collection}) => {
    // console.log(collection)

    const {routeName} = useParams();
    const collectionn = selectCollection(routeName)

    return (
      <div className="collection-page">
        <h2>COLLECTION PAGE : {collectionn.title}</h2>
        <div className="items">
          {collectionn.items.map((item) => (
            <CollectionItemComponent key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
}
 
// const mapStateToProps = (state, ownProps) => ({
//     collection : selectCollection(ownProps.match.params.collectionId)(state)
// })

export default CollectionPage;