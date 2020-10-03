console.log('server index.ts starting');
import * as express from 'express';
import * as path from 'path';

import * as eslint from 'eslint';
const eslintCli = new eslint.CLIEngine();
const eslintConfig = eslintCli.getConfigForFile(
  '../client/src/components/avatar-label/avatar-label.tsx',
);

console.log('eslintConfig ', eslintConfig);

const app = express();
const port = process.env.PORT || 3001;

//Static file declaration
console.log('dir is ---', path.resolve(__dirname, '../client/build'));
app.use(express.static(path.resolve(__dirname, '../client/build')));

//production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../client/build')));
  //
  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, '../client/build/index.html'));
  });
}

//build mode
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public/index.html'));
});

//start server
app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
