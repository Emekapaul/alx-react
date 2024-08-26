import jsonData from '../../notifications.json';

export default function getAllNotificationsByUser(userId) {
  return jsonData
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}
