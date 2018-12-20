import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

class WorkItem extends React.Component {

    render() {
        const { classes, theme } = this.props;

        const workTaskList = this.props.tasks.split('|');
        const workTasks = workTaskList.map((task)=>
            <li key={task}><Typography variant="body2" className={classes.paperTypography} align="justify">{task}</Typography></li>
        );
        const workExampleList = this.props.examples.split('|');
        const workExamples = workExampleList.map((example)=>
            <li key={example}><Typography variant="body2" className={classes.paperTypography} align="justify">{example}</Typography></li>
        );
        return (
            <Paper className={classes.paper}>
                <a className={classes.anchorOffset} id={this.props.id}>&nbsp;</a>
                <Typography variant="title" className={classes.paperTypography} align="justify">{this.props.company}</Typography>
                <Typography variant="subheading" className={classes.paperTypography} align="justify">{this.props.title}</Typography>
                <Typography variant="body1" className={classes.paperTypography} align="justify">Responsibilities:</Typography>
                <ul>
                    {workTasks}
                </ul>
                <Typography variant="body1" className={classes.paperTypography} align="justify">Some Example Projects:</Typography>
                <ul>
                    {workExamples}
                </ul>
            </Paper>
        );
    }
}

WorkItem.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const styles = theme => ({
    anchorOffset:{
        position: "relative",
        top: "-64px"
    },
    paper: {
        margin: "1em"
    },
    paperTypography: {
        padding: "0.25em 1em 0em 1em"
    },
});

export default withStyles(styles, { withTheme: true })(WorkItem);