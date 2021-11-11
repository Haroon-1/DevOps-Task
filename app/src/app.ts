
/**
 * application backend
 * this is a simple application backend with a couple of routes
 *
 * don't spend time improving the code of this application since it's not part of the assessment
 *
 * @author Ronny Badilla <ronny@chainsafe.io>
 * 
 */

import express from 'express';
import compression from 'compression';

// controllers
import * as homeController from './controllers/home';
import * as passwordController from './controllers/password';
import * as ipController from './controllers/ip';

// application definition
const app = express();

// express configuration
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', homeController.welcome);
app.get('/healthcheck', homeController.healthcheck);
app.get('/password', passwordController.generate);
app.get('/ip', ipController.obtain);

export default app;

