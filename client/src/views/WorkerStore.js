import React, { Component } from 'react';
import Axios from 'axios';
import { API } from '../core/endpoint';
import WorkerStorePanel from '../components/WorkerStorePanel';
import '../styles/WorkerStore.css';

class WorkerStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sales: [],
      workers: [],
    };
  }
  componentDidMount() {
    const requests = [
      Axios.get(API.concat('/workers')),
      Axios.get(API.concat('/sales')),
    ];
    Promise.all(requests)
      .then(([workers, sales]) =>
        this.setState({
          workers: workers.data,
          sales: sales.data.map(sale => sale.sort((a, b) => a.distance - b.distance)[0]),
        })
      );
  }
  getSalesByWorker(worker) {
    return this.state.sales.filter(sale => worker === sale.worker.name);
  }
  renderPanelList() {
    return this.state.workers.map((worker, key) =>
      <WorkerStorePanel key={key} worker={worker} sales={this.getSalesByWorker(worker.name)} />
    );
  }
  render() {
    return (
      <div className='painelList'>
        {this.renderPanelList()}
      </div>
    );
  }
}

export default WorkerStore;
