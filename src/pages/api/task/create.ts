// pages/api/tasks/create.ts
import { NextApiRequest, NextApiResponse } from 'next';
import connectMongoDB from '../../../lib/db';
import Task from '../../../models/task.model';
import User from '../../../models/user.model';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') return res.status(405).end();
    try {
        await connectMongoDB();

        // Awaiting User.findOne to get the actual user object
        const user_f = await User.findOne({ email: req.body.user });
        // Check if user is found
        if (!user_f) return res.status(404).json({ error: 'User not found' });

        const task = new Task({
            user: user_f._id, // Assuming that you want to set the user's _id as the user field in Task
            name: req.body.name,
            color: req.body.color
        });

        await task.save();
        res.status(201).json(task);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Error creating task' });
    }
}
