import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class SectionHeader extends React.Component {

    render() {
        const { classes, theme } = this.props;

        return (
            <Typography variant="title" className={classes.sectionTitle} align="justify">
                <a className={classes.anchorOffset} id={this.props.id}>&nbsp;</a>
                {this.props.title}
            </Typography>
        );
    }
}

SectionHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const styles = theme => ({
    sectionTitle: {
        padding: '1em 1em 0em 1em'
    },    
    anchorOffset:{
        position: "relative",
        top: "-64px"
    },
});

export default withStyles(styles, { withTheme: true })(SectionHeader);