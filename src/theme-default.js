import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue600, cyanA200, red500} from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
    palette: {},
    appBar: {
        height: 57,
        color: red500
    },
    drawer: {
        width: 230,
        color: cyanA200
    },
    raisedButton: {
        primaryColor: blue600
    }
});

export default themeDefault;
