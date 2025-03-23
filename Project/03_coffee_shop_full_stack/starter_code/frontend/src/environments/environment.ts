/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */
export const environment = {
  production: false,
  apiServerUrl: 'http://localhost:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-vaa4tqxczeu26tio', // the auth0 domain prefix (without .us.auth0.com)
    audience: 'coffee-shop', // the audience set for the auth0 app
    clientId: '2OdMNbU0tBlmp3TTtD7YQaBt0kKF7cyf', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application.
  }
};