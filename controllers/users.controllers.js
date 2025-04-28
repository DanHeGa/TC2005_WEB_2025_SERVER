import { pool } from "../DB/db.js"

//DONE
export const getUsers = (req, res) => {
    pool.query('SELECT * from users', function (error, results) {
    if (error){
        res.status(500).json({msg : error.message, users : [],});
        return;
    };
    res.status(200).json({msg: "OK", users : results});
  })
};

//DONE
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

//DONE
export const postUsers = (req, res) => {
    const { name, username, pass, age } = req.body; //debes llamar EXACTAMENTE el nombre de la propiedad para que dentro del body las encuentre
    pool.execute("insert into users(name, username, pass, age) values (?, ?, ?, ?)", 
        [name, username, pass, age],
        (error, results) => {
        if (error){
            res.status(500).json({msg : error.message, users : [],});
            return;
        }
        console.log(results)
        res.status(200).json({msg: "OK", users : results });
      });
};

//DONE
export const putUsers = (req, res) => {
    const { name, username, pass, age } = req.body; //debes llamar EXACTAMENTE el nombre de la propiedad para que dentro del body las encuentre
    // console.log(req.body);
    pool.execute("update users set name=?, username=?, pass=?, age=? where id_users = ? ", 
        [name, username, pass, age, req.params.id],
        (error, results) => {
        if (error){
            res.status(500).json({msg : error.message, users : [],});
            return;
        }
        res.status(200).json({msg: "OK", users : results });
      }
    );
};

//DONE
export const deleteUser = (req, res) => {
    pool.execute(
        "delete from users where id_users = ?",
        [req.params.id],
        (error, results) => {
            if (error){
                res.status(500).json({msg: error, users: []});
                return;
            }
            res.status(200).json({msg: "ok", users: results});
        }
    )
};

//DONE
export const login = (req, res) => {
    const { username, pass, id_users } = req.body; //debes llamar EXACTAMENTE el nombre de la propiedad para que dentro del body las encuentre
    console.log(req.body);
    
    pool.execute(
        "SELECT * FROM users WHERE username = ? and id_users = ?"
        ,[ username, id_users ], (error, results) => {
        if (error){
            res.status(500).json({msg : error.message, users : {} });
            return;
        }
        if (results.length < 1){
            res.status(401).json({isLogin: false, msg: "credenciales no encontradas", user : {} });
            return;
        }
        if (results[0].pass === pass){ //[0] because results it's an array with the user's dictionary within it
            res.status(200).json({isLogin: true, msg: "OK", user : results[0] });
            return;
        } else {
            res.status(401).json({isLogin: false, msg: "credenciales invalidas", user : {} });
            return;
        }
        }
    );
};
