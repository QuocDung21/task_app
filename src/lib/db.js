import { mongoose } from 'mongoose'

const connectMongoDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://quocdung:quocdung@task-app.stjgq5a.mongodb.net/task-app')
    console.log('Connected to MongoDB.')
  } catch (error) {
    console.log(error)
  }
}

export default connectMongoDB
