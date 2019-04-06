import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class WorkerStorePanel extends Component {
  render() {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant='overline'>{this.props.worker.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant='overline'>
            {this.props.sales.map(sale => sale.point).join(' - ')}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

WorkerStorePanel.propTypes = {
  worker: PropTypes.object.isRequired,
  sales: PropTypes.array.isRequired,
};

export default WorkerStorePanel;
