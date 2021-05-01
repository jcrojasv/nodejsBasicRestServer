const { response, request } = require('express');


const getUsers = (req = request, res = response) => {
  const params = req.query;
  res.json({
    message: 'get API',
    params
  });
}

const postUsers = (req, res= response) => {
  const body = req.body;
  console.log(body);
  res.json({
    message: 'post API',
    body
  })
}

const deleteUsers = (req = request, res = response) => {
  const id = req.params.id;
  res.json({
    message: 'delete API',
    delete: id
  })
}

const putUsers = (req, res) => {
  res.json({
    message: 'put API'
  });
}

const patchUsers = (req, res) => {
  res.json({
    message: 'patch API'
  });
}

module.exports = {
  getUsers,
  postUsers,
  deleteUsers,
  putUsers,
  patchUsers
}