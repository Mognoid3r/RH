const mongoose = require('mongoose');
const { Schema } = mongoose;
// const bcrypt = require('bcrypt')
// const SALT_WORK_FACTOR = 10;


const taskSchema = new Schema({
    taskText: String,
    completed: Boolean
})


// const cartItem = new Schema({
//   id: String,
//   amount: Number,
//   price: Number
// })

// const userSchema = new Schema({
//   guest: Boolean,
//   userName: String,
//   email: {
//     type: String, trim: true, index: {
//       unique: true,
//       partialFilterExpression: {email: {$type: "string"}}
//     }
//   },
//   password: String,
//   stripeKey: String,
//   cart: [cartItem]
// });

// userSchema.pre('save', function(next) {
//   var user = this;

//   // only hash the password if it has been modified (or is new)
//   if (!user.isModified('password')) return next();

//   // generate a salt
//   bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//       if (err) return next(err);

//       // hash the password using our new salt
//       bcrypt.hash(user.password, salt, function(err, hash) {
//           if (err) return next(err);

//           // override the cleartext password with the hashed one
//           user.password = hash;
//           next();
//       });
//   });
// });


module.exports = mongoose.model("tasks", taskSchema);