import { connect } from "react-redux";
import "./collections-overview.styles.scss";
import CollectionPreview from "../preview-collection/preview-collection.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.utils";

const CollectionsOverview = ({collections}) => {
    return (
      <div className="collections-overview">
        {collections.map(({ id, ...otherShopProps }) => (
          <CollectionPreview key={id} {...otherShopProps} />
        ))}
      </div>
    );
}

const mapStateToProps = (state) => ({
  collections: selectCollectionsForPreview(state.shop.collections),
});
 
export default connect(mapStateToProps) (CollectionsOverview);