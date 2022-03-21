import axios from 'axios';

const get = async (baseEndpoint, route) => {
  const res = await axios.get(`${baseEndpoint}/${route}`);
  return res.data;
};

export default get;
