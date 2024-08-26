import { schema, normalize } from 'normalizr';
import jsonData from '../../notifications.json';

export function getAllNotificationsByUser(userId) {
  return jsonData
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, {
  idAttribute: 'guid',
});
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
});

export const normalizedData = normalize(jsonData, [notification]);
console.log(normalizedData);