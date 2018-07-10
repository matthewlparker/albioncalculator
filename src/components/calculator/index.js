import React, { Component } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import bagImg from '../../assets/t4-bag.png';
import capeImg from '../../assets/t4-cape.png';

import './style.css';

const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});

class Calculator extends Component {
  state = {
    cloth: 0,
    leather: 0
  };

  handleChange = name => event => {
    this.setState({
      [name]: parseInt(event.target.value)
    });
  };

  calculate = num => {
    let sum = (this.state.cloth + this.state.leather) * num;
    if (sum) {
      return (this.state.cloth + this.state.leather) * num;
    } else {
      return 0;
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="calculator">
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="number"
            label="Cloth"
            value={this.state.age}
            onChange={this.handleChange('cloth')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
          <TextField
            id="number"
            label="Leather"
            value={this.state.age}
            onChange={this.handleChange('leather')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
          />
        </form>

        <div className="output">
          <div className="output-content">
            <div className="times-4">
              <img src={bagImg} alt="bag icon" />
              <div>Bag {this.calculate(8)}</div>
            </div>
            <div className="times-8">
              <img src={capeImg} alt="cape icon" />
              <div>Cape {this.calculate(4)}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Calculator);
