import React from 'react';
import {Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

const SidebarList = (props) => (
    <div>
        <List>
            {props.menu.map((item, index) => <ListItem key={index} primaryText={item.text} leftIcon={item.icon} containerElement={< Link to = {
                item.link
            } />}/>)
}
        </List>
        <Divider/>
        <List>
            {props.mine.map((item, index) => <ListItem key={index} primaryText={item.text} leftIcon={item.icon} containerElement={< Link to = {
                item.link
            } />}/>)
}
        </List>
    </div>
);

export default SidebarList;
