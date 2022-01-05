import axios from 'axios';

const KEY = 'AIzaSyCTgKh8_3lEWzMvRRgDjf49tKmSXH8xH7g';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
});
