import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';

//icons
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import AppsIcon from '@material-ui/icons/Apps';
import BookIcon from '@material-ui/icons/Book';
import BuildIcon from '@material-ui/icons/Build';

// compenents
import ProjItem from './ProjItem.js'
import WorkItem from './WorkItem.js'
import SectionHeader from './SectionHeader.js'
import SkillGrid from './SkillGrid.js';


class Portfolio extends React.Component {
    state = {
        drawer: false,
    };

    toggleDrawer = () => {
        this.setState({ drawer: !this.state.drawer });
    };

    render() {
        const { classes, theme } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar
                        className={classNames(classes.appBar, {
                            [classes.appBarShift]: this.state.drawer,
                            [classes[`appBarShift-left`]]: this.state.drawer,
                        })}
                    >
                        <Toolbar disableGutters={!this.state.drawer}>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.toggleDrawer}
                                className={classNames(classes.menuButton)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" noWrap>
                                Suen Ting
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        className={classes.fixed}
                        variant="persistent"
                        anchor="left"
                        open={this.state.drawer}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <div className={classes.drawerHeader}>

                        </div>
                        
                        <Divider />
                        <List component="nav">

                            <a className={classes.plain} href="#proj">
                            <ListItem button>
                                <ListItemIcon><AppsIcon/></ListItemIcon>
                                <ListItemText>Projects</ListItemText>
                            </ListItem>
                            </a>

                            <a className={classes.plain} href="#work">
                            <ListItem>
                                <ListItemIcon><WorkIcon/></ListItemIcon>
                                <ListItemText>Work</ListItemText>
                            </ListItem>
                            </a>
                            <a className={classes.plain} href="#maru"><ListItem button><ListItemText>Maru Matchbox</ListItemText></ListItem></a>
                            <a className={classes.plain} href="#xeraflop"><ListItem button><ListItemText>Xeraflop Technologies</ListItemText></ListItem></a>
                            <a className={classes.plain} href="#vc"><ListItem button><ListItemText>Vision Critical</ListItemText></ListItem></a>
                            <a className={classes.plain} href="#relic"><ListItem button><ListItemText>Relic Entertainment</ListItemText></ListItem></a>

                            <a className={classes.plain} href="#skill">
                            <ListItem button>
                                <ListItemIcon><BuildIcon/></ListItemIcon>
                                <ListItemText>Skills</ListItemText>
                            </ListItem>
                            </a>

                            <a className={classes.plain} href="#edu">
                            <ListItem button>
                                <ListItemIcon><BookIcon/></ListItemIcon>
                                <ListItemText>Education</ListItemText>
                            </ListItem>
                            </a>
                        </List>
                        <Divider />
                    </Drawer>
                    <main
                        className={classNames(classes.content, 
                            classes[`content-left`], {
                            [classes.contentShift]: this.state.drawer,
                            [classes[`contentShift-left`]]: this.state.drawer,
                        })}
                    >
                    <div className={classes.drawerHeader}></div>
                    <Paper>
                    <SectionHeader id="proj" title="Hobby Projects"/>
                    
                    <ProjItem
                    id="ReactBible"
                    title="React Bible"    
                    desc="A simple reader SPA/PWA written in React/Redux with text to voice provided by responsivevoice.org"
                    github="https://github.com/suenting/ReactBible"
                    url="https://suenting.github.io/ReactBible/index.html"
                    ></ProjItem>

                    <ProjItem
                    id="Darks_Voice"
                    title="Darks Voice"    
                    desc="A simple flutter app, plays back audio from darksouls carvings"
                    github="https://github.com/suenting/darks_voice"
                    apk="https://github.com/suenting/darks_voice/releases/download/v1/darks_voice.apk"
                    ></ProjItem>

                    <ProjItem
                    id="defender"
                    title="GalaxyDefender"    
                    desc="Me learning Unity 2018, by making space invaders"
                    github="https://github.com/suenting/GalaxyDefender"
                    url="https://suenting.github.io/GalaxyDefender/index.html"
                    ></ProjItem>

                    <ProjItem
                    id="Legacy"
                    title="Legacy Project Page"    
                    desc="An old project page for projects created a long time ago"
                    url="https://suenting.github.io/legacy/index.html"
                    ></ProjItem>

                    <Divider/>

                    <SectionHeader id="work" title="Work Experience"/>
                    <WorkItem
                    id="maru" 
                    company="Maru Matchbox"
                    title="Programmer (Jul 2016 -  Aug 2018)"
                    tasks="
                    	Developing various internal tools and pipelines to facilitate the delivery of client projects using Node JS, Python, and Angular JS|
                        Developed new Interactive question types to expand the company’s portfolio of questions offered to clients|
                        Supporting existing client, research projects for clients such as (Samsung, Coca Cola, Subway) primarily with C#, JavaScript, LUA"
                    examples="
                    	Developed a tool to automate the construction of “idea filtering” surveys for Subway which takes as input several ideas (as images) for potential new sandwiches, and generates a research study for immediate deployment, using Python.|
                        Developed an internal knowledge sharing web application using Node JS / Angular JS|
                        Developed a reporting system which takes data from a third party “conceptsauce.io” via REST API, and aggregates the data into a CSV report for our internal data analytics team, using C# and Python.|
                        Developed a “credit card” question layout for the financial sector which takes as input a information regarding various card providers, and their respective card offerings, and presents the question of asking respondents “what credit cards do you own” in a simple and visually appealing manner. This layout was built using React JS.|
                        Migrating legacy code across different platforms, for future long term support"
                    />
                    <WorkItem
                    id="xeraflop"
                    company="Xeraflop Technologies"
                    title="Software Developer (Mar 2015 - Jul 2016)"
                    tasks="
                    	Developed web and kiosk based software solutions to facilitate point-of-sale for the domains of horse and dog racing, fantasy sports and the sale of state regulated products."
                    examples="
                    	Developing a web based CMS to manage and report  on deployed kiosks with PHP|
                        Developing a Mobile / Web based Fantasy sports game, primarily with Node JS RabbitMQ, and Angular JS, as well as statistics tracking data visualizations in D3.JS|
                        Developing various kiosk clients to serve as point of sales for various products, primarily using C#/C++ for middleware, and web stack for clients.|
                        Developing an in store TV advertising client for state regulated products based on active in-store inventory, using Electron and Angular JS."
                    />
                    <WorkItem
                    id="vc"
                    company="Vision Critical"
                    title="Programmer (Oct 2010 - Mar 2015)"
                    tasks="
                    	Developed various client web surveys.|
                        Developed internal tools /to facilitate the production of web surveys."
                    examples="
                        Implementing a market research project for a technology client to understand consumer values and preferences regarding smart phones and wearable smart devices, using C#"
                    />
                    <WorkItem
                    id="relic"
                    company="Relic Entertainment"
                    title="Programmer (May 2010 - Dec 2015)"
                    tasks="
                    	Worked on Company of Heroes: Tales of Valor, as well as the Chinese localization of Company of Heroes|
                        Primarily focused developing gameplay, simulation, UI and related internal tools in C++"
                    examples="
                    	Implementing unit simulation, responsible for controlling unit movement and path selection, using C++|
                        Assisting game designers by adding additional gameplay features for use in content creation|
                        Assisting game designers by troubleshooting gameplay scripting and content, using LUA"
                    />

                    <Divider/>
                    <SectionHeader id="skill" title="Skills"/>
                    <SkillGrid
                    frontend="
                        HTML5|
                        JavaScript|
                        CSS|
                        Angular JS|
                        Karma / Jasmine|
                        React|
                        Bootstrap
                    "
                    backend="
                        Node JS|
                        Express JS|
                        Mocha|
                        Python|
                        REST API|
                        SQL
                    "
                    desktop="
                        C++|
                        C#|
                        Python|
                        QT|
                        Electron JS
                    "
                    other="
                        Visual Studios|
                        GIT|
                        JSON|
                        XML|
                        NPM|
                        Unit Testing
                    "
                    ></SkillGrid>

                    <Divider/>
                    <SectionHeader id="edu" title="Education"/>

                    <Typography variant="body1" className={classes.paperTypography} align="justify">
                    Simon Fraser University (2009) <br/>
                    Bachelors of Computer Science
                    </Typography>
                    
                    <Divider/>
                    </Paper>

                    </main>
                </div>
            </div>
        );
    }
}

Portfolio.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const drawerWidth = 240;

const styles = theme => ({
    fixed:{
        position: 'fixed',
        width: '0px',
    },
    root: {
        flexGrow: 1,
    },
    appFrame: {
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'fixed',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'appBarShift-left': {
        marginLeft: drawerWidth,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    'content-left': {
        marginLeft: 0,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'contentShift-left': {
        marginLeft: drawerWidth,
    },
    plain:{
        textDecoration:"none"
    }
});

export default withStyles(styles, { withTheme: true })(Portfolio);