export function formatDateFromMySQL(mysqlDate) {
  const date = new Date(mysqlDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Monate starten bei 0
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}
export function extractTimeFromMySQL(mysqlDateTime) {
  const date = new Date(mysqlDateTime);
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
}
