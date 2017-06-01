import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {filter} from 'graphql-anywhere';
import CircularProgress from 'material-ui/CircularProgress';
import DealList, {dealCardsFragments} from '../components/dealList';

class Timeline extends Component {

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
                <DealList deals={deals}/>
            </div>

        );
    }
}

const DealQuery = gql ` query DealQuery{
  allDeals(orderBy : createdAt_DESC) {
    id
    ...DealCardsDeal
  }
}
${dealCardsFragments.deals}
`
const TimelineWithData = graphql(DealQuery, {
    options: (ownProps) => {
        return {
            variables: {
                id: ownProps.id
            }
        }
    }
})(Timeline)

export default TimelineWithData;
