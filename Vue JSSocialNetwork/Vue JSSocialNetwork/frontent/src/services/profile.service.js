
import axios from 'axios';
import { BaseService } from './base.service';
import { Observable } from 'rxjs/Rx';

class ProfileService extends BaseService {

    static instance;

    constructor() {  super(); }

    static get Instance() {
       // Do you need arguments? Make it a regular method instead.
       return this.instance || (this.instance = new this());
    }

    get() {
        return Observable.fromPromise(axios.get(`${this.api}/profile/me`))
        .map((res) => {
            console.log( res.data); 
            const parsed = JSON.stringify(res.data);
            localStorage.setItem('profile', parsed);  
            return res.data;})
        .catch((error) => {console.log( error.response); this.handleError(error.response)});
    }
}

// export a singleton instance in the global namespace
export const profileService = ProfileService.Instance;