import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {filter} from 'graphql-anywhere';
import CircularProgress from 'material-ui/CircularProgress';
import AlmostList, {almostCardsFragments} from '../components/almostList';

class AlmostDone extends Component {

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
                <AlmostList deals={deals}/>
            </div>

        );
    }
}

const DealFilter = gql `query DealFilter {
  allDeals(filter: {
    endAt_lte: "2017-06-04"
  }){
    id
    ...DealCardsDeal
  }
}
${almostCardsFragments.deals}
`
const AlmostWithData = graphql(DealFilter, {
    options: (ownProps) => {
        return {
            variables: {
                id: ownProps.id
            }
        }
    }
})(AlmostDone)

export default AlmostWithData;
