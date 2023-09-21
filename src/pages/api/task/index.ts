// pages/api/tasks/create.ts
import { NextApiRequest, NextApiResponse } from 'next';
import connectMongoDB from '../../../lib/db';
import Task from '../../../models/task.model';
import User from '../../../models/user.model';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') return res.status(405).end();
    try {
        await connectMongoDB();
        const task = await Task.find()
        res.status(201).json(task);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'Error creating task' });
    }
}
