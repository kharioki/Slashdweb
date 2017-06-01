import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {filter} from 'graphql-anywhere';
import CircularProgress from 'material-ui/CircularProgress';

import ServiceList, {serviceCardsFragments} from '../components/serviceList';

class Services extends Component {

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
                <ServiceList deals={deals}/>
            </div>

        );
    }
}

const ServiceQuery = gql ` query ServiceQuery{
  allDeals(filter: {
    category: "service"
  }) {
    id
    ...ServiceCardsDeal
  }
}
${serviceCardsFragments.deals}
`
const ServicePageWithData = graphql(ServiceQuery, {
    options: (ownProps) => {
        return {
            variables: {
                id: ownProps.id
            }
        }
    }
})(Services)

export default ServicePageWithData;
