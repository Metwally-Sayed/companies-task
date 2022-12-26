import axios from 'axios';

export const axiosOne = axios.create({
  baseURL: 'https://forall.sa/',
});

export async function fetchData(pageParam) {
  const response = await axios.get(
    `https://forall.sa/services/api/ads/companies?page=${pageParam}`,
  );
  return response.data.data;
}
