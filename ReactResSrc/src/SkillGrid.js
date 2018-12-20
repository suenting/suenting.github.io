import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      fontSize: 14,
      fontWeight: 700
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  

class SkillGrid extends React.Component {

    render() {
        const { classes, theme } = this.props;

        const frontendList = this.props.frontend.split('|');
        const frontendSkills = frontendList.map((skill)=>
            <li key={skill}><Typography variant="body2" className={classes.paperTypography} align="justify">{skill}</Typography></li>
        );        

        const backendList = this.props.backend.split('|');
        const backendSkills = backendList.map((skill)=>
            <li key={skill}><Typography variant="body2" className={classes.paperTypography} align="justify">{skill}</Typography></li>
        );

        const desktopList = this.props.desktop.split('|');
        const desktopSkills = desktopList.map((skill)=>
            <li key={skill}><Typography variant="body2" className={classes.paperTypography} align="justify">{skill}</Typography></li>
        );

        const otherList = this.props.other.split('|');
        const otherSkills = otherList.map((skill)=>
            <li key={skill}><Typography variant="body2" className={classes.paperTypography} align="justify">{skill}</Typography></li>
        );          
        return (
            <Paper className={classes.paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                        <CustomTableCell>Web Frontend</CustomTableCell>
                        <CustomTableCell>Web Backend</CustomTableCell>
                        <CustomTableCell>Desktop</CustomTableCell>
                        <CustomTableCell>Other</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                        <CustomTableCell><ul>{frontendSkills}</ul></CustomTableCell>
                        <CustomTableCell><ul>{backendSkills}</ul></CustomTableCell>
                        <CustomTableCell><ul>{desktopSkills}</ul></CustomTableCell>
                        <CustomTableCell><ul>{otherSkills}</ul></CustomTableCell>
                        </TableRow>
                    </TableBody>   
                </Table>
            </Paper>
        );
    }
}

SkillGrid.propTypes = {
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

export default withStyles(styles, { withTheme: true })(SkillGrid);