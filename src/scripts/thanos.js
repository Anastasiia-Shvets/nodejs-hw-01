import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
    try {
        const contacts = await fs.readFile(PATH_DB, 'utf-8');
        let parseContacts = JSON.parse(contacts);
        parseContacts = parseContacts.filter(() => Math.random() >= 0.5);
        await fs.writeFile(PATH_DB, JSON.stringify(parseContacts, null, 2));
        console.log( parseContacts);
    } catch (error) {
        console.log('error', error);
    }
};

await thanos();
