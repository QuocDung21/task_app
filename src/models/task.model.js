// models/task.ts
import mongoose, { Schema } from 'mongoose'

const TaskSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  completed: { type: Boolean, default: false },
  color: { type: String, required: false },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Task = mongoose.models.Task || mongoose.model('Task', TaskSchema)

export default Task
