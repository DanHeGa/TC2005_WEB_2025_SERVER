import { pool } from "../DB/db.js"

export const getUsers = (req, res) => {
    pool.query('SELECT * from users', function (error, results) {
    if (error){
        res.status(500).json({msg : error.message, users : [],});
        return;
    };
    res.status(200).json({msg: "OK", users : results});
  })
};

export const getUser = (req, res) => {
    const id = req.params.id;
    pool.execute('SELECT * from users where id_users = ?', [id], (error, results) => {
        if (error){
            res.status(500).json({msg : error.message, users : [],});
            return;
        };
        res.status(200).json({msg: "OK", users : results});
      }) 
};
export const postUsers = (req, res) => {};
export const putUsers = (req, res) => {};
export const deleteUser = (req, res) => {};
export const login = (req, res) => {};
