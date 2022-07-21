import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectCollection} from '../../redux/shop/shop.utils';
import './collection.styles.scss';


const CollectionPage = ({collection}) => {
    const {routeName} = useParams();
    const specificCollection = selectCollection(collection, routeName)

    return (
      <div className="collection-page">
        <h2>COLLECTION PAGE : {specificCollection.title}</h2>
        <div className="items">
          {specificCollection.items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
}
 
const mapStateToProps = (state) => ({
    collection : state.shop.collections
})

export default connect(mapStateToProps) (CollectionPage);