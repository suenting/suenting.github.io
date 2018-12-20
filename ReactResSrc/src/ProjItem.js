import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

class ProjItem extends React.Component {

    render() {
        const { classes, theme } = this.props;

        let github = "";
        let url = "";
        let apk = "";

        if(this.props.github){
            github = <Typography variant="body1" className={classes.paperTypography} align="justify">GitHub: <a href={this.props.github} target='_blank'>{this.props.github}</a></Typography>;
        }
        if(this.props.url){
            url = <Typography variant="body1" className={classes.paperTypography} align="justify">Url: <a href={this.props.url} target='_blank'>{this.props.url}</a></Typography>;
        }
        if(this.props.apk){
            apk = <Typography variant="body1" className={classes.paperTypography} align="justify">Android APK: <a href={this.props.apk} target='_blank'>download apk</a></Typography>;
        }  
        return (
            <Paper className={classes.paper}>
                <Typography variant="title" className={classes.paperTypography} align="justify">{this.props.title}</Typography>
                <Typography variant="subheading" className={classes.paperTypography} align="justify">{this.props.desc}</Typography>
                {github}
                {url}
                {apk}
            </Paper>
        );
    }
}

ProjItem.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const styles = theme => ({
    paper: {
        margin: "1em"
    },
    paperTypography: {
        padding: "0.25em 1em 0em 1em"
    },
});

export default withStyles(styles, { withTheme: true })(ProjItem);