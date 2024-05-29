import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {
        const contacts = await fs.readFile(PATH_DB, 'utf-8');
        const parseContacts = JSON.parse(contacts);
        for (let i = 0; i < number; i ++) {
            parseContacts.push(createFakeContact());
        }
        await fs.writeFile(PATH_DB, JSON.stringify(parseContacts, null, 2))
    } catch (error) {
        console.log('error', error);
    }
};

await generateContacts(5);
