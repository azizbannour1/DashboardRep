const cookieSession = require("cookie-session");
const express = require ("express");
const cors = require("cors");
// const passport = require("passport");
const mongoose = require ("mongoose");
const User = require('./models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express ()


const routerProducts = require ('./routes/products.route')

// app.use(cookieSession (
//     { name:"session", keys:["tnker"], maxAge:24 * 60 * 60 * 100}));

// app.use(passport.initialize());
// app.use(passport.session());

app.use(cors());

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/TnkerMarketPlace')

app.post('/api/register', async (req, res) => {
	console.log(req.body)

	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			prenom: req.body.prenom,
			email: req.body.email,
			password: newPassword,
			phoneNumber: req.body.phoneNumber,
			region: req.body.region,
			vousetes: req.body.vousetes,
		})

		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

app.use('/api',routerProducts)
  


app.listen ("5000",()=>{
    console.log("server is running");
})