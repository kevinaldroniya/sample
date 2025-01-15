const server = express();

create = function (config){
    let routes = require("./routes");

    server.set('env', config.env);
    server.set('port', config.port);
    server.set('config', config.hostname);

    server.use(bodyParser.json())

    routes.init(server);
}