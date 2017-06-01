import React from 'react';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import {grey400} from 'material-ui/styles/colors';
// import Divider from 'material-ui/Divider';

const FormPage = () => {

    const style = {
        margin: 20,
        padding: 20,
        display: 'inline-block'
    };
    const styles = {
        toggleDiv: {
            maxWidth: 300,
            marginTop: 40,
            marginBottom: 5
        },
        toggleLabel: {
            color: grey400,
            fontWeight: 100
        },
        buttons: {
            marginTop: 30,
            float: 'right'
        },
        saveButton: {
            marginLeft: 5
        }
    };

    return (
        <div>
            <Paper style={style} zDepth={4}>
                <form>
                    <div className="row">

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                            <TextField hintText="Deal Name" floatingLabelText="Deal name" fullWidth={true}/>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                            <SelectField floatingLabelText="Category" value="" fullWidth={true}>
                                <MenuItem key={0} primaryText="product"/>
                                <MenuItem key={1} primaryText="service"/>
                            </SelectField>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                            <DatePicker hintText="Start Date" floatingLabelText="Start Date"/>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
                            <DatePicker hintText="End Date" floatingLabelText="End Date"/>
                        </div>
                    </div>
                    <div style={styles.toggleDiv}>
                        <Toggle label="Recurring" labelStyle={styles.toggleLabel}/>
                    </div>
                    <TextField hintText="e.g 30% off all ..." floatingLabelText="Add a description" multiLine={true} rows={2} rowsMax={4} fullWidth={true}/>
                    <br/>

                    <div style={styles.buttons}>
                        <Link to="/">
                            <RaisedButton label="Cancel"/>
                        </Link>
                        <Link to="/">
                            <RaisedButton label="Submit" style={styles.saveButton} type="submit" primary={true}/>
                        </Link>
                    </div>
                </form>
            </Paper>
        </div>
    );
};

export default FormPage;
