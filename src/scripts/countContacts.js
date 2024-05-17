import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');

        let array = JSON.parse(data);
        let count = array.length;
        return count;
      } catch (err) {
        console.error('Помилка читання файлу:', err);
      }
};

console.log(await countContacts());
