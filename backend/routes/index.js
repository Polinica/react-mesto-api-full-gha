const express = require('express')

const {
  celebrate, Joi,
} = require('celebrate')

// const {
//   handleError,
// } = require('../utils/handleError')
const {
  users,
} = require('./users')
const {
  cards,
} = require('./cards')
const {
  auth,
} = require('../middlewares/auth')

const {
  login, createUser,
} = require('../controllers/users')

const {
  NotFoundError,
} = require('../errors/NotFoundError')

const routes = express.Router()

routes.post('*', express.json())
routes.patch('*', express.json())

routes.post(
  '/signup',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
      avatar: Joi.string().regex(/https?:\/\/(www)?[0-9a-z\-._~:/?#[\]@!$&'()*+,;=]+#?$/i),
    }),
  }),
  createUser,
)

routes.post(
  '/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    }),
  }),
  login,
)

routes.all('*', auth)

routes.use('/users', auth, users)
routes.use('/cards', auth, cards)

routes.all('*', (req, res, next) => {
  next(new NotFoundError('Неверный адрес запроса'))
})

module.exports = {
  routes,
}
