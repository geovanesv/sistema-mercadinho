
const express = require('express');
const exphbs = require('express-handlebars')
const db = require('./db/conn')
const app = express();

const ClienteRoutes = require('./routes/routesClientes')
const FornecedorRoutes = require('./routes/routesFornecedor')
const VendaRoutes = require('./routes/routesVenda')
const ProdutosRoutes = require('./routes/routesProdutos')


//Autor Geovane Araujo

const hbs = exphbs.create({
    partialsDir: ["views/partials"]
  })

app.engine('handlebars', hbs.engine)
app.set('view engine','handlebars');


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use(express.static('public'));

//app.setMaxListeners(15);


app.get('/',function (req, res){ res.render('index');});
app.use('/produtos',ProdutosRoutes);
app.use('/fornecedores',FornecedorRoutes);
app.use('/clientes',ClienteRoutes);
app.use('/vendas',VendaRoutes);

//app.use('/auth',require('./routes/auth'));
//app.use('/produtos', Produto)



  db
  .sync()
  .then(() => {
    app.listen(3000)
    console.log('Server Started')
  })
  .catch((err) => {
      console.log(err)
    })
  