// import express app
import app from './app';

const server = app.listen(app.get('port'));

// shutdown gracefully
process.on('SIGINT', () => {
  console.log('... process interruption detected, stopping');
  server.close(() => console.log('... application stopped'))
  process.exit(0);
});

console.log(
  'application running at http://127.0.0.1:%d in %s mode', 
  app.get('port'),
  app.get('env'),
);

