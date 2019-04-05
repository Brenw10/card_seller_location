import React, { Component } from 'react';
import Axios from 'axios';
import { API } from '../core/endpoint';

class WorkerStoreList extends Component {
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
        this.setState({ workers: workers.data, sales: sales.data })
      );
  }
  getSalesByWorker(worker) {
    return this.state.sales
      .filter(sale => sale.place === worker)
      .map(sale => sale.point);
  }
  renderUser() {
    if (!this.state.workers) return;
    return this.state.workers.map(worker =>
      <div>
        <div>{worker.name}</div>
        <div>{this.getSalesByWorker(worker.name)}</div>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.renderUser()}
      </div>
    );
  }
}

export default WorkerStoreList;
