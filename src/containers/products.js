import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {filter} from 'graphql-anywhere';
import CircularProgress from 'material-ui/CircularProgress';

import ProductList, {productCardsFragments} from '../components/productList';

class Products extends Component {

    render() {
        if (this.props.data.loading) {
            return (
                <div>
                    <CircularProgress/>
                </div>
            )
        }
        let deals = this.props.data.allDeals
        return (
            <div>
                <ProductList deals={deals}/>
            </div>

        );
    }
}

const ProductQuery = gql ` query ProductQuery{
  allDeals(filter: {
    category: "product"
  }) {
    id
    ...ProductCardsDeal
  }
}
${productCardsFragments.deals}
`
const ProductPageWithData = graphql(ProductQuery, {
    options: (ownProps) => {
        return {
            variables: {
                id: ownProps.id
            }
        }
    }
})(Products)

export default ProductPageWithData;
