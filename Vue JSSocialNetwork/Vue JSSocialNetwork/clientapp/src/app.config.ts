
let config = {
    stsServerIdentityUrl: 'http://localhost:5000',
    ApiUrl: 'http://localhost:5000/api/DataEventRecords/',
    client_id: 'vuejs_code_client',
    redirect_uri: 'http://localhost:5000/callback.html',
    silent_redirect_uri: 'http://localhost:5000/silent-renew.html',
    post_logout_redirect_uri: 'http://localhost:5000/',
};

if (process.env.VUE_APP_MODE === 'production') {
    config = {
        stsServerIdentityUrl: 'http://localhost:44348',
        ApiUrl: 'http://localhost:5000/api/DataEventRecords/',
        client_id: 'vuejs_code_client',
        redirect_uri: 'http://localhost:5000/callback.html',
        silent_redirect_uri: 'http://localhost:5000/silent-renew.html',
        post_logout_redirect_uri: 'http://localhost:5000/',
    };
}

export default config;