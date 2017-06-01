import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {filter} from 'graphql-anywhere';
import CircularProgress from 'material-ui/CircularProgress';
import UpComingList, {upcomingCardsFragments} from '../components/upComingList';

class UpComing extends Component {

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
                <UpComingList deals={deals}/>
            </div>

        );
    }
}

const DealFilter = gql `query DealFilter {
  allDeals(filter: {
    startAt_gte: "2017-06-04"
  }) {
    id
    ...DealCardsDeal
  }
}
${upcomingCardsFragments.deals}
`

const UpComingWithData = graphql(DealFilter, {
    options: (ownProps) => {
        return {
            variables: {
                id: ownProps.id
            }
        }
    }
})(UpComing)

export default UpComingWithData;
