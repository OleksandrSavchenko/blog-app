import passport from 'koa-passport';
import LocalStrategy from 'passport-local';
import passportJwt from 'passport-jwt';

import User from '../models/users';
import config from './config';

const ExtractJwt = passportJwt.ExtractJwt;
const JwtStrategy = passportJwt.Strategy;

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false
    },

    (email, passport, done) => {
        User.findOne({email}, (err, user) => {
            if (err) {
                return done(err);
            }

            if (!user || !user.checkPassword(password)) {
                return done(null, false, { message: 'User not exist or password is wrong' });
            }

            return done(null, user);
        });
    })
);

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: config.jwtsecret
};

passport.use(new JwtStrategy(jwtOptions, (payload, done) => {
        User.findById(payload.id, (err, done) => {
            if (err) {
                return done(err);
            }

            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
    })
);