import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights';
const date = moment(new Date()).format('DD-MM-YYYY');

export const fetchData = () =>
  fetch(`${baseUrl}/${date}`).then(res => {
    if (res.ok) {
      return res.json();
    }
    return null;
  });
