import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {selectCollection} from '../../redux/shop/shop.utils';
import './collection.styles.scss';


const CollectionPage = ({collection}) => {
    // console.log(collection)

    const {routeName} = useParams();
    const collectionn = selectCollection(routeName)

    return (  <div className="collection-page"><h2>COLLECTION PAGE : {routeName}</h2>
    <p>{collectionn.title}</p></div> );
}
 
// const mapStateToProps = (state, ownProps) => ({
//     collection : selectCollection(ownProps.match.params.collectionId)(state)
// })

export default CollectionPage;