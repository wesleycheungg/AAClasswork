const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const jwt = require('jsonwebtoken');
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const passport = require('passport');

router.get("/test", (req, res) => {
    res.json({ msg: "This is the user route"})
});


router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({msg: 'Success'});
})

router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ handle: req.body.handle }).then(user => {
        if (user) {
            errors.handle = "User already exists";
            return res.status(400).json(errors);
        } else {
            const newUser = new User({
                handle: req.body.handle,
                email: req.body.email,
                password: req.body.password
            })

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then((user) => {
                            const payload = { id: user.id, handle: user.handle };
                            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            });
                        })
                        .catch(err => console.log(err))
                });
            });
            // newUser.save().then( user => res.send(user)).catch(err => res.send(err));
        }
    })
})

router.post('/login', (req, res) => {

    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password

    User.findOne({ email })
        .then(user => {
            if(!user) {
                errors.handle = "This user does not exist";
                return res.status(400).json(errors);
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch){
                        const payload = {
                            id: user.id,
                            email: user.email,
                        }
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            }
                        )
                    } else {
                        errors.password = "Incorrect password";
                        return res.status(400).json(errors);
                    }
                })
        })
})


module.exports = router;
