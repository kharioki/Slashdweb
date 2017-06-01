import React from 'react';
import TextField from 'material-ui/TextField';
import {white, grey, grey900, red500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';

const SearchBox = () => {

    const styles = {
        iconButton: {
            float: 'left'
        },
        textField: {
            color: grey,
            backgroundColor: grey,
            borderRadius: 2,
            height: 35
        },
        inputStyle: {
            color: grey900,
            paddingLeft: 5
        },
        hintStyle: {
            height: 16,
            paddingLeft: 5,
            color: white
        }
    };

    return (
        <div>
            <IconButton style={styles.iconButton}>
                <Search color={white}/>
            </IconButton>
            <TextField hintText="Search..." underlineShow={true} style={styles.textField} inputStyle={styles.inputStyle} hintStyle={styles.hintStyle}/>
        </div>
    );
};

export default SearchBox;
