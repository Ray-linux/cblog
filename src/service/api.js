import axios from "axios";
import {API_NOTIFICATION_MESSAGES, SERVICE_URLS}  from '../constains/config.js'
import { getAccessToken, getType } from "../utils/common-utils";

// const API_URL = `http://localhost:8000`;
const API_URL = ``;


const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    // "Accept": "application/json, form-data", 
    // "accept": "application/json, form-data", 
    // "Content-Type": "application/json"
    "content-type": "application/json",

  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    if (config.TYPE.params) {
      config.params = config.TYPE.params
  } else if (config.TYPE.query) {
      config.url = config.url + '/' + config.TYPE.query;
  }
  return config;
  },
  function (e) {
    return Promise.reject(e);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return ProcessResponce(response);
  },
  function (error) {
    return Promise.reject(processError(error));
  }
);

const ProcessResponce = (res) => {
  if (res?.status === 200) {
    return { isSuccess: true, data: res.data};
  } else {
    return {
      isFailure: true,
      status: res?.status,
      msg: res?.msg,
      code: res?.code,
    };
  }
};


const processError = (error) => {
  if(error.response){
    console.log('ERROR IN RESPONCE: ', error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.responceFailure,
      code: error.response.status
    }
  }
  else if(error.request){
    console.log('ERROR IN REQUEST: ', error.toJSON());
    return {
      isError: true, 
      msg: API_NOTIFICATION_MESSAGES.requestFailure,
      code: error.response.status
    }
  }
  else{
    console.log('ERROR IN NETWORK: ', error.toJSON());
    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGES.networkError,
      code : ''
    }
  }
}


const API = {};


for (const [key, value] of Object.entries(SERVICE_URLS)) {
  API[key] = (body, showUploadProgress, showDownloadProgress) => 
    axiosInstance({
      method: value.method,
      url: value.url,
      data: value.method === 'DELETE' ? {} : body,
      responseType: value.responseType,
      headers:{
        authorization: getAccessToken()
      },
      TYPE: getType(value, body),
      onUploadProgress: function(progressEvent){
        if(showUploadProgress){
          let percentageCompleted = Math.round((progressEvent.loaded * 100)/progressEvent.total)
          showUploadProgress(percentageCompleted)
        }
      },
      onDownloadProgress: function(progressEvent){
        if(showDownloadProgress){
          let percentageCompleted = Math.round((progressEvent.loaded * 100)/progressEvent.total)
          showDownloadProgress(percentageCompleted)
        }
      }
    })
}



export {API};