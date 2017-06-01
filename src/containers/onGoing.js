import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {filter} from 'graphql-anywhere';
import CircularProgress from 'material-ui/CircularProgress';
import OnGoingList, {ongoingCardsFragments} from '../components/onGoingList';

class OnGoing extends Component {

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
                <OnGoingList deals={deals}/>
            </div>

        );
    }
}

const DealFilter = gql `query DealFilter {
  allDeals(filter: {
    startAt_lte: "2017-06-04"
  }){
    id
    ...DealCardsDeal
  }
}
${ongoingCardsFragments.deals}
`
const OnGoingWithData = graphql(DealFilter, {
    options: (ownProps) => {
        return {
            variables: {
                id: ownProps.id
            }
        }
    }
})(OnGoing)

export default OnGoingWithData;
