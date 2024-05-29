import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import {createFakeContact} from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    try {
        const contact = await fs.readFile(PATH_DB, 'utf-8');
        const parseContact = JSON.parse(contact);
        parseContact.push(createFakeContact());
        await fs.writeFile(PATH_DB, JSON.stringify(parseContact, null, 2));
    } catch (error) {
        console.log('errer', error);
    }

};

await addOneContact();
