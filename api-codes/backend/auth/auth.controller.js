const User = require('./auth.dao');


exports.createUser = (req, res) => {
  const newUser = {
    name: req.body.name,
    code: req.body.code,

  }

  User.create(newUser, (err, user) => {
    if (err && err.code === 11000) return res.status(409).send('Codigo ya existe');
    if (err) return res.status(500).send('Server error');
    
    const dataUser = {
      name: user.name,
      code: user.code
      
      
    }
    // response 
    
    res.send({ dataUser });
  });
}

exports.loginUser = (req, res) => {
  const userData = {
    code: req.body.code
  }
  User.findOne({ code: userData.code }, (err, user) => {
    if (err) return res.status(500).send('Server error!');

    if (!user) {
      // email does not exist
      res.status(409).send({ message: 'Something is wrong' });
    } else {
      const dataUser = {
        code: user.code,
        
      }
      res.send({ message:'Inicio de sesion correcto' , dataUser });
      
    }
  });
}











