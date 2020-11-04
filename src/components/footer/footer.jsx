import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Select,
  MenuItem,
  FormControl
} from '@material-ui/core';
import { colors } from '../../theme'

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import SecurityIcon from '@material-ui/icons/Security';
import DescriptionIcon from '@material-ui/icons/Description';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import ForumIcon from '@material-ui/icons/Forum';
import BarChartIcon from '@material-ui/icons/BarChart';
import BuildIcon from '@material-ui/icons/Build';

import Store from "../../stores";
const store = Store.store

const styles = theme => ({
  footer: {
    padding: '48px',
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    background: colors.white,
    marginTop: '48px',
    flexWrap: 'wrap',
    borderTop: '1px solid ' + colors.borderBlue,
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
      flexDirection: 'column'
    }
  },
  heading: {
    marginBottom: '12px',
    paddingBottom: '9px',
    borderBottom: "3px solid " + colors.borderBlue,
    width: 'fit-content',
    marginLeft: '30px'
  },
  link: {
    paddingBottom: '12px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  icon: {
    fill: colors.borderBlue,
    marginRight: '6px'
  },
  yearnIcon: {
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  builtWith: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  builtWithLink: {
    paddingTop: '12px'
  },
  builtHeading: {
    marginBottom: '12px',
    paddingBottom: '9px',
    borderBottom: "3px solid " + colors.borderBlue,
    width: 'fit-content',
  },
  products: {
    padding: '0px 24px',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '24px'
    }
  },
  community: {
    padding: '0px 24px',
    [theme.breakpoints.down('xs')]: {
      paddingBottom: '24px'
    }
  },
  socials: {
    padding: '0px 24px'
  }
});


class Footer extends Component {

  constructor(props) {
    super()
  }

  render() {
    const { classes, t, location } = this.props;

    return (
      <div className={classes.footer}>

        <div className={classes.products}>
          <Typography className={classes.heading} variant={'h6'}>Discord</Typography>
          <div className={classes.link} onClick={() => window.open("https://discord.com/invite/GS3c5D8", "_blank")} >
            <img alt="" src={require('../../assets/discord.svg')} height='24px' className={classes.icon} />
            <Typography variant={'h4'} >DARK-Discord</Typography>
          </div>
        </div>
        <div className={classes.products}>
          <Typography className={classes.heading} variant={'h6'}>Github</Typography>
          <div className={classes.link} onClick={() => window.open("https://github.com/Ladarken", "_blank")} >
            <img alt="" src={require('../../assets/github.svg')} height='24px' className={classes.icon} />
            <Typography variant={'h4'} >Ladarken</Typography>
          </div>
        </div>
        <div className={classes.products}>
          <Typography className={classes.heading} variant={'h6'}>Etherscan</Typography>
          <div className={classes.link} onClick={() => window.open("https://etherscan.io/token/0x3108ccFd96816F9E663baA0E8c5951D229E8C6da", "_blank")} >
            <img alt="" src={require('../../assets/etherscan1.png')} height='24px' className={classes.icon} />
            <Typography variant={'h4'} >Etherscan-DARK</Typography>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(Footer));
