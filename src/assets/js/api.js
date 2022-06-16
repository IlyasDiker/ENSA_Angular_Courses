import axios from "axios"

export const API = {
  host: 'https://62aad707a62365888bcdd714.mockapi.io/',
  COURSE_RESSOURCE : 'course',
  USER_RESSOURCE : 'user',
}

export const getCourses = async () => {
  let res = await axios.get(`${API.host}${API.COURSE_RESSOURCE}`);
  let dataList = res.data;
  return dataList ? dataList : [];
}

export const getCourse = async (index) => {
  let res = await axios.get(`${API.host}${API.COURSE_RESSOURCE}/${index}`);
  let dataEntity = res.data;
  return dataEntity ? dataEntity : null;
}

export const createCourse = async (data) => {
  let res = await axios.post(`${API.host}${API.COURSE_RESSOURCE}`, {...data});
  let dataEntity = res.data;
  return dataEntity ? dataEntity : null;
}

export const updateCourse = async (index, data) => {
  let res = await axios.put(`${API.host}${API.COURSE_RESSOURCE}/${index}`, {...data});
  let dataEntity = res.data;
  return dataEntity ? dataEntity : null;
}

export const deleteCourse = async (index) => {
  let res = await axios.delete(`${API.host}${API.COURSE_RESSOURCE}/${index}`);
  let dataEntity = res.data;
  return dataEntity ? dataEntity : null;
}
