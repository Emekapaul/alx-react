import { schema, normalize } from 'normalizr';
import jsonData from '../../dist/notifications.json';

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, {
  idAttribute: 'guid',
});
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
});

export const normalizedData = normalize(jsonData, [notification]);

export function getAllNotificationsByUser(userId) {
  return normalizedData.result
    .filter((id) => normalizedData.entities.notifications[id].author === userId)
    .map((id) => normalizedData.entities.messages[normalizedData.entities.notifications[id].context]);
}

export function notificationsNormalizer(data) {
  return normalize(data, [notification]);
}
