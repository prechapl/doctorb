const app = require('./app')

const PORT = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.listen(PORT, host, () => {
    console.log(`Server is listening on port ${PORT} on host ${host}`)
});
