import axios from "axios"

export const API = {
  host: 'https://62aad707a62365888bcdd714.mockapi.io/',
  COURSE_RESSOURCE : 'course',
  USER_RESSOURCE : 'user',
}

export const getCourses = () => {
  return new Promise(async (resolve, reject)=>{
    let res = await axios.get(`${API.host}${API.COURSE_RESSOURCE}`);
    let dataList = res.data;
    if(dataList){
      resolve(dataList);
    } else {
      reject();
    }
  })
}

export const getCourse = (index) => {
  return new Promise(async (resolve, reject)=>{
    let res = await axios.get(`${API.host}${API.COURSE_RESSOURCE}/${index}`);
    let dataEntity = res.data;
    if(dataEntity){
      resolve(dataEntity);
    } else {
      reject();
    }
  })
}

export const createCourse = (data) => {
  return new Promise(async (resolve, reject)=>{
    let res = await axios.post(`${API.host}${API.COURSE_RESSOURCE}`, {...data});
    let dataEntity = res.data;
    if(dataEntity){
      resolve(dataEntity);
    } else {
      reject();
    }
  })
}

export const updateCourse = (index, data) => {
  return new Promise(async (resolve, reject)=>{
    let res = await axios.put(`${API.host}${API.COURSE_RESSOURCE}/${index}`, {...data});
    let dataEntity = res.data;
    if(dataEntity){
      resolve(dataEntity);
    } else {
      reject();
    }
  })
}

export const deleteCourse = (index) => {
  return new Promise(async (resolve, reject)=>{
    let res = await axios.delete(`${API.host}${API.COURSE_RESSOURCE}/${index}`);
    let dataEntity = res.data;
    if(dataEntity){
      resolve(dataEntity);
    } else {
      reject();
    }
  })
}
