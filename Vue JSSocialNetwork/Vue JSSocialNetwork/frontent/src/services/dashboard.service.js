import axios from 'axios';
import { BaseService } from './base.service';

class DashboardService extends BaseService {

    static instance;

    constructor() {  super(); }

    static get Instance() {
       // Do you need arguments? Make it a regular method instead.
       return this.instance || (this.instance = new this());
    }

    getHomeDetails() {
        return axios.get(`${this.api}/dashboard/home`);
    }
}

// export a singleton instance in the global namespace
export const dashboardService = DashboardService.Instance;
