// Modules 
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

// Redux
import { connect } from "react-redux";
import { selectIsFetching } from "../../redux/shop/shop.selector";

// Components 
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionComponent from "./collection.component";

const mapStateToProps = createStructuredSelector({
   isLoading: selectIsFetching
});

const CollectionPageContainer = compose(
   connect(mapStateToProps),
   WithSpinner
)(CollectionComponent)

export default CollectionPageContainer