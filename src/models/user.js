import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

userSchema.pre('save', function () {
  if (!this.username) {
    this.username = this.email;
  }
});

export const User = model('User', userSchema);
