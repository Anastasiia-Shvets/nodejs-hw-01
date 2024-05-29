import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
    try {
        const contacts = await fs.readFile(PATH_DB, 'utf-8');
        const parseContacts = JSON.parse(contacts);
        const emptyContacts = [];
        await fs.writeFile(PATH_DB, JSON.stringify(emptyContacts, null, 2));
        console.log(parseContacts);
    } catch (error) {
        console.log('error', error);
    }
};

await removeAllContacts();
