import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');

        let array = JSON.parse(data);
        let count = array.length;

        for (let i = 0; i < count; i++) {
            const result = array.pop(Math.random(array) >= 0.5);
            return result;
          }

      } catch (err) {
        console.error('Помилка читання файлу:', err);
      }
};

await thanos();
