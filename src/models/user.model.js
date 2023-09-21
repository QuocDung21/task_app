import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
  email: { type: String },
  token: { type: String, required: false },

  // task: { type: Schema.Types.ObjectId, ref: 'Task' },
})

const User = mongoose.models.User || mongoose.model('User', UserSchema)

export default User
