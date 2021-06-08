const hospitalDataRoutes = (app, fs) => {
    // variables
    const dataPath = './data/hospitalData.json';
  
    // READ
    app.get('/hospitalData', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
  
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = hospitalDataRoutes;