const User = require('../model/User')
const bcrypt = require('bcryptjs')


module.exports = class UserController {


  static login(req, res) {
    res.render('users/login')
  }

  static logout(req, res) {
    req.session.destroy()
    res.redirect('/')
  }
  static register(req, res) {
    res.render('users/userform')
  }

  static async loginPost(req, res) {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email: email } })
    if (!user) {
      req.flash('message', 'Usuário não cadastrado')
      res.render('users/userform')
    }


    if (!password === user.password) {
      req.flash('message', 'Senha inválida!')
      res.render('users/userform')
      return
    }
    req.session.userid = user.id

    req.flash('message', 'Usuário logado com sucesso!')

    //salva a session antes de redirecioná-lo
    req.session.save(() => {
      res.redirect('/',)
    })
  }

  static newUser(req, res) {
    res.render('users/userform')
  }

  static async newUserSave(req, res) {
    const usuario = {
      nome: req.body.nome,
      email: req.body.email,
      password: req.body.password,
    }
    try {
      await User.create(usuario)
      req.flash('message', 'Usuário criado com sucesso!')
      req.session.save(() => {
        res.redirect('/users/register')
      })
    } catch (error) {
      console.log(error)
    }




  }
  static home(req, res) {
    res.render('dashboard')
  }

  static async allUsers(req, res) {
    try {
      const users = await User.findAll({ raw: true })
      res.render('users/viewuser', { users })
    } catch (error) {
      console.log(error)
    }


  }

  static async updateUser(req, res) {
    try {
      const id = req.params.id
      const user = await User.findOne({ where: { id: id }, raw: true })
      res.render('users/edit', { user })
    } catch (error) {
      console.log(error)
    }


  }

  static async updateUserSave(req, res) {
    try {
      const id = req.body.id
      const user = {
        nome: req.body.nome,
        email: req.body.email,
        password: req.body.password
      }
      await User.update(user, { where: { id: id } })
      req.flash('message', 'Usuário editado com sucesso!')
      req.session.save(() => {
        res.redirect('/users/allUsers')
      })


    } catch (error) {
      console.log(error)
    }

  }

  static async removeUser(req, res) {
    try {
      const id = req.body.id
      await User.destroy({ where: { id: id } })
      req.flash('message', 'Usuário deletado com sucesso!')
      req.session.save(() => {
        res.redirect('/users/allUsers')
      })


    } catch (error) {
      console.log(error)
    }


  }


}