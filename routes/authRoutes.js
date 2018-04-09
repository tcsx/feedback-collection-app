const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      console.log("callback: " + req.user);
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    console.log("logout");
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    console.log("cu: " + req.user);
    res.send(req.user);
  });
};
