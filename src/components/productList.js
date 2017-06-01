import React, {Component} from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const iconButtonElement = (
    <IconButton touch={true} tooltip="more" tooltipPosition="bottom-left">
        <MoreVertIcon color={grey400}/>
    </IconButton>
);

const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Save</MenuItem>
        <MenuItem>Share</MenuItem>
    </IconMenu>
);

export const productCardsFragments = {
    deals: gql `
    fragment ProductCardsDeal on Deal {
      id
      dealName
      description
      business{
        id
        name
        location
      }
    }
  `
}

export default class ProductList extends Component {

    render() {
        console.log(this.props);
        if (this.props.deals) {
            let deals = this.props.deals

            let productsList = deals.map((deal, index) => {
                return (
                    <ListItem key={index} leftAvatar={< Avatar src = {
                        "../img/AppIcon128.png"
                    } />} rightIconButton={rightIconMenu}>
                        <div>
                            <p>{deal.dealName}</p>
                            <p>{deal.business.name},{deal.business.location}</p>
                            <p>{deal.description}</p>
                        </div>
                        <Divider/>
                    </ListItem>
                )
            });
            return (
                <div>
                    <List>
                        {productsList}
                    </List>
                </div>
            )

        } else {
            return (
                <div>
                    <h4>no data</h4>
                </div>
            )
        }
    }
}
