module.exports = {
    logger: 'tachi/Logging/consoleLogger',
    defaultRoute: '/Error?errorCode=404',
    loginUrl: '/Bootstrap/Login',
    appRoot: __dirname,
    port: 8080,
    connectionDetails: {
    	baseDirectory: 'data'
    }
};