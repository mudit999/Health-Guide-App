// load up our shiny new route for users
const hospitalDataRoutes = require('./hospitalData');

const appRouter = (app, fs) => {
  // we've added in a default route here that handles empty routes
  // at the base API url
  app.get('/', (req, res) => {
    res.send('Welcome to Node-Express Backend');
  });

  // run our user route module here to complete the wire up
  hospitalDataRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;