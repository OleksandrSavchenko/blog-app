import Koa from 'koa'; //core
import Router from 'koa-router'; //router
import bodyParser from 'koa-body-parser'; //parser for post requests
//import server from 'koa-static'; //module that provide static files (like index.html)

import logger from 'koa-logger'; // requests logger

import passport from 'koa-passport';
import './config/passport';
import jwt from 'jsonwebtoken';
import socetioJwt from 'socketio-jwt';
import socketIO from 'socket.io';

import mongoose from 'mongoose';
import config from './config/config';

import User from './models/users';

const app = new Koa();
const router = new Router();

//app.use(serve('public'));
app.use(logger());
app.use(bodyParser());

app.use(passport.initialize()); //passport initially
app.use(router.routes()); //then routes

mongoose.Promise = Promise;
mongoose.set('debug', true);
mongoose.connect(config.dbHost);
mongoose.connection.on('error', console.error);

//-------------- Routes --------------//

router.post('/users', async(ctx, next) => {
    try {
        ctx.body = await User.create(ctx.request.body);
    }
    catch (err) {
        ctx.status = 400;
        ctx.body = err;
    }
});

router.get('/', async(ctx, next) => {
    ctx.body = 'Yo ho ho!';
});

router.post('/login', async(ctx, next) => {
    await passport.authenticate('local', (err, user) => {
        if (user == false) {
            ctx.body = 'Login failed';
        } else {
            const payload = {
                id: user.id,
                userName: user.userName,
                email: user.email
            };

            const token = jwt.sign(payload, config.jwtsecret); //token is creating here

            ctx.body = {user: user.userName, token: `JWT ${token}`}
        }
    })(ctx, next);
});

const server = app.listen(5050, () => console.log('Koa server running on localhost:5050'));


