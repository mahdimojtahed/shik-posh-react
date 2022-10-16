// Modules
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

// Redux
import { connect } from "react-redux";
import { selectIsFetching } from "../../redux/shop/shop.selector";

// Components
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverviewComponent from "./collection-overview.component";


const mapStateToProps = createStructuredSelector({
   isLoading: selectIsFetching
});

// const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverviewComponent))
//  instead of this we can use compose :

const CollectionOverviewContainer = compose(
   connect(mapStateToProps),
   WithSpinner
)(CollectionOverviewComponent);

export default CollectionOverviewContainer