
const express = require('express');
const exphbs = require('express-handlebars')
const db = require('./db/conn')
const app = express();

const ClienteRoutes = require('./routes/routesClientes')
const FornecedorRoutes = require('./routes/routesFornecedor')
const VendaRoutes = require('./routes/routesVenda')
const ProdutosRoutes = require('./routes/routesProdutos')
const UsuariosRoutes = require('./routes/routesUsuarios')
const indexRoutes = require('./routes/login')
const session = require('express-session');


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

app.use(session({
  name: "session",
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));


app.use('/',indexRoutes);
app.use('/produtos',ProdutosRoutes);
app.use('/usuarios',UsuariosRoutes);
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
  