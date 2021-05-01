const { Router } = require('express');
const {
  getUsers,
  postUsers,
  deleteUsers,
  putUsers,
  patchUsers
} = require('../controllers/users.controller');

const router = Router();

router.get('/', getUsers);

router.post('/', postUsers);

router.delete('/:id', deleteUsers);

router.put('/:id', putUsers);

router.patch('/:id', patchUsers);

module.exports = router;