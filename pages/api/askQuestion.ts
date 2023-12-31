import query from '../../lib/queryApi';
import type { NextApiRequest, NextApiResponse } from 'next';
import admin from 'firebase-admin';
import { adminDB } from '@/firebaseAdmin';

// Додайте імпорт типу Message тут

type Data = {
    answer: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { prompt, chatId, model, session } = req.body;

    if (!prompt) {
        res.status(404).json({ answer: 'Please provide a prompt' });
        return;
    }

    if (!chatId) {
        res.status(404).json({ answer: 'Please provide a chat id' });
        return;
    }

    const response = await query(prompt, chatId, model);

    const message: Message = {
        text: response || 'ChatGPT was unable to find an answer for that!',
        createAt: admin.firestore.Timestamp.now(),
        user: {
            _id: 'ChatGPT',
            name: 'ChatGPT',
            avatar: 'https://links.papareact.com/89k',
        },
    };

    await adminDB
        .collection('users')
        .doc(session?.user?.email)
        .collection('chats')
        .doc(chatId)
        .collection('messages')
        .add(message);

    res.status(200).json({ answer: message.text });
}
