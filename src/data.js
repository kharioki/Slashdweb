import React from 'react';
import Home from 'material-ui/svg-icons/action/home';
import GroupWork from 'material-ui/svg-icons/action/group-work';
import Favorite from 'material-ui/svg-icons/action/favorite';
import AddBox from 'material-ui/svg-icons/content/add-box';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Shopping from 'material-ui/svg-icons/action/shopping-basket';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import {cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
    menus: [
        {
            text: 'All deals',
            icon: <Home/>,
            link: '/'
        }, {
            text: 'Upcoming deals',
            icon: <Shopping/>,
            link: '/upcoming'
        }, {
            text: 'Ongoing deals',
            icon: <Shopping/>,
            link: '/ongoing'
        }, {
            text: 'Almost-done deals',
            icon: <Shopping/>,
            link: '/almost'
        }, {
            text: 'Product deals',
            icon: <Shopping/>,
            link: '/product'
        }, {
            text: 'Service deals',
            icon: <Shopping/>,
            link: '/service'
        }
    ],
    myTimeline: [
        {
            text: 'My Timeline',
            icon: <PermIdentity/>,
            link: '/service'
        }, {
            text: 'My Favourites',
            icon: <Favorite/>,
            link: '/service'
        }, {
            text: 'Shopping list',
            icon: <Shopping/>,
            link: '/product'
        }, {
            text: 'Add deal',
            icon: <AddBox/>,
            link: '/form'
        }
    ],
    tablePage: {
        items: [
            {
                id: 1,
                name: 'Product 1',
                price: '$50.00',
                category: 'Category 1'
            }, {
                id: 2,
                name: 'Product 2',
                price: '$150.00',
                category: 'Category 2'
            }, {
                id: 3,
                name: 'Product 3',
                price: '$250.00',
                category: 'Category 3'
            }, {
                id: 4,
                name: 'Product 4',
                price: '$70.00',
                category: 'Category 4'
            }, {
                id: 5,
                name: 'Product 5',
                price: '$450.00',
                category: 'Category 5'
            }, {
                id: 6,
                name: 'Product 6',
                price: '$950.00',
                category: 'Category 6'
            }, {
                id: 7,
                name: 'Product 7',
                price: '$550.00',
                category: 'Category 7'
            }, {
                id: 8,
                name: 'Product 8',
                price: '$750.00',
                category: 'Category 8'
            }
        ]
    }
};

export default data;
