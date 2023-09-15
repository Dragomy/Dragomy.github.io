/*coolString function*/
const currentDate = new Date();

const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');

const weekAtDay = Math.floor(currentDate.getDate() / 7);
const identifier = weekAtDay % 2 === 0 ? 'A//' : 'B//';
const formattedDate = `${identifier}${year}/${month}/${day}`;
document.getElementById('dateParagraph').textContent = formattedDate;

/*!coolString function*/
