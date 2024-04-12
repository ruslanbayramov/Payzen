const User = require('../models/userModel');

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error('User did not exist!');

    const isTruePassword = await user.correctPassword(
      req.body.password,
      user.password
    );
    if (!isTruePassword) throw new Error('Password is not correct!');

    res.status(200).json({
      status: 'success',
      user: {
        name: user.name,
        surname: user.surname,
        email: user.email,
      },
      message: 'Logged in successfully!',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.signup = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });

    res.status(201).json({
      status: 'success',
      user: {
        name: user.name,
        surname: user.surname,
        email: user.email,
      },
      message: 'Sign up successful',
    });
  } catch (error) {
    if (error.message.startsWith('E11000 duplicate'))
      return res.status(400).json({
        status: 'fail',
        message: 'This email already used for another account!',
      });

    const err = Object.values(error.errors).map((el) => el.message);

    if (error.name === 'ValidationError')
      return res.status(400).json({
        status: 'fail',
        message: err[0],
      });

    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};
