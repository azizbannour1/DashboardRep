      const mongoose = require('mongoose');
            const User = new mongoose.Schema(
            {
            name: {
              type: String,
              required: [true, 'Please add a nom'],
            },
            prenom: {
                type: String,
                required: [true, 'Please add a prenom'],
              },
            email: {
              type: String,
              required: [true, 'Please add an email'],
              unique: true,
            },
            password: {
              type: String,
              required: [true, 'Please add a password'],
            },
            phoneNumber: {
                type: String,
                required: [true, 'Please add a phoneNumber'],
              },
            region: {
              type: String,
              required: [true, 'Please add a region'],
            },
            vousetes: {
                type: String,
                required: [true, 'Please add a type'],
              },
          },
          {
            timestamps: true,
          }
        )
        const model = mongoose.model('UserData', User)

        module.exports = model
        
