import app from './app';
import './database';

app.listen(app.get('port'));

console.log('servidor en : ', 3000);