const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const { googleClientID, googleClientSecret } = require('../config/keys.js');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => { done(null, user); });
});

passport.use(new GoogleStrategy({
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
            done(null, existingUser);
        } else {
            new User({ googleId: profile.id }).save().then(user => done(null, user));
        }
    });
    new User({ googleId: profile.id }).save();
}));