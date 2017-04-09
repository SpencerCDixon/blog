export function getBooks() {
  return fetch('https://api.spencerdixon.com/users/1/books', {
    headers: {
      Accept: 'application/vnd.life-api.com; version=1',
      'Content-Type': 'application/json',
    },
  }).then(r => r.json());
}
