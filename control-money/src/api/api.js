import axios from 'axios';

const controlRequest = axios.create({
  baseURL: 'http://localhost:8080/',
});
export default controlRequest;
