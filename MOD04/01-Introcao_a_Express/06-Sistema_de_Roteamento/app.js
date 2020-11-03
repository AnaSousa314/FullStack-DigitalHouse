const rotasProdutos = require('./routes/produtos')

const app = express()

app.use('/produtos',rotasProdutos);