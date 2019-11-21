import * as bodyParser from 'body-parser';
import * as cors from 'cors';
// tslint:disable-next-line:no-implicit-dependencies
import * as core from 'express-serve-static-core';

import { MESH_GATEWAY_PATH } from '../constants';
import { errorHandler } from '../middleware/error_handling';
import { createMeshGatewayRouter } from '../routers/mesh_gateway_router';
import { OrderBookService } from '../services/orderbook_service';

// tslint:disable-next-line:no-unnecessary-class
export class MeshGatewayHttpService {
    constructor(app: core.Express, orderBook: OrderBookService) {
        app.use(cors());
        app.use(bodyParser.json());
        app.use(MESH_GATEWAY_PATH, createMeshGatewayRouter(orderBook));
        app.use(errorHandler);
    }
}