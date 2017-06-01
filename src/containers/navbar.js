import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {red500} from 'material-ui/styles/colors';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import SearchBox from '../components/searchBox';

export default class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1
        };
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <Toolbar>
                <ToolbarGroup>
                    <ToolbarTitle text="Slash'd"/>
                    <FontIcon className="muidocs-icon-custom-sort"/>
                </ToolbarGroup>
                <ToolbarGroup>
                    <SearchBox/>
                </ToolbarGroup>
                <ToolbarGroup firstChild={true}>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="Ghana"/>
                        <MenuItem value={2} primaryText="Nigeria"/>
                        <MenuItem value={3} primaryText="Kenya"/>
                        <MenuItem value={4} primaryText="South Africa"/>
                    </DropDownMenu>
                    <ToolbarSeparator/>
                    <RaisedButton label="Register" primary={true}/>
                    <IconMenu iconButtonElement={< IconButton touch = {
                        true
                    } > <NavigationExpandMoreIcon/> < /IconButton>}>
                        <MenuItem primaryText="Ghana"/>
                        <MenuItem primaryText="Nigeria"/>
                        <MenuItem primaryText="Kenya"/>
                        <MenuItem primaryText="S.Africa"/>
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}
