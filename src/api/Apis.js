//Api Methods
const POST = 'POST';
const GET = 'GET';
const PUT = 'PUT';

const token = '';

// Multipart Form Data Header for multimedia
const MULTIPART_APP_HEADER = {
  Accept: 'application/json',
  'Content-Type': 'multipart/form-data;',
  Authorization: 'Basic YWRtaW46YWRtaW4=',
};

const BASE_URL = 'http://34.93.234.46/api/v1/';

const api = {
  sendOTP: BASE_URL + 'generateOTP',
};

const getAllActivities = (id) => {
  return fetch(api.profileDetail + id, {
    method: GET,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + global.accessToken,
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.log(error);
      return '';
    });
};

export const Api = {
  getAllActivities,
};

// Generator Functions Calling Api
// function* authenticateUser(jsonObj) {
//   const response = yield fetch(api.authenticateUser, {
//     method: POST,
//     body: jsonObj,
//     headers: {   'Content-Type': 'application/json',   Authorization: 'Bearer ' + global.accessToken, }
//   });
//   console.log(response);
//   const responseJson = yield response.status === 200
//     ? JSON.parse(response._bodyInit)
//     : [];
//   console.log(responseJson);
//   return responseJson;
// }
