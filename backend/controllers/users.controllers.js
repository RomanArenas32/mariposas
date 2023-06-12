const { response } = require('express');


const getUsers = (req, res = response) => {
    res.status(200).json({
        msg: "Haciendo un get"
    })
};

const postUsers = (req, res = response) => {
    const { edad = "8927" } = req.body;
    res.json({
        msg: "Peticion POST",
        edad
    })
};
const putUsers = (req, res = response) => {
  
    const {id} = req.params;

    res.json({
        msg: "peticion PUT",
        id
    })
};


const deleteUsers = (req, res = response) => {

    res.status(200).json({
        msg: "Haciendo un delete"
    })
}

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers

}