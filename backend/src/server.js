const app = require('./app');
const sequelize = require('./db');
const port = process.env.PORT || 3000;

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database connected and tables synchronized');
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => console.error('Unable to connect to the database:', err));
