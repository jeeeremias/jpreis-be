import restify from 'restify';

import routes from './config/routes';

const server = restify.createServer();

routes(server);

server.listen(8080, () => console.log('%s listening at %s', server.name, server.url));

export default server;
