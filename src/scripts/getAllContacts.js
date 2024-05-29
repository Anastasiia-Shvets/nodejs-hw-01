import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
    try {
        const contacts = await fs.readFile(PATH_DB, 'utf-8');
        return JSON.parse(contacts);
    } catch (error) {
        console.log('error', error);
        return [];
    }
};

console.log(await getAllContacts());
