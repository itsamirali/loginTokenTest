import axios from "axios";

const RETRIVE_USER_INFO =
  "https://62cc1757a080052930a4d436.mockapi.io/api/v1/user/";

// [
//     {
//       "addresses": [
//         {
//           "type": "mainAddress",
//           "address": "this is fake address 1",
//           "title": "address 1",
//           "id": "1"
//         },
//         {
//           "type": "subAddress",
//           "address": "this is fake address 2",
//           "title": "address 1",
//           "id": "2"
//         },
//         {
//           "type": "subAddress",
//           "address": "this is fake address 3",
//           "title": "address 1",
//           "id": "3"
//         }
//       ],
//       "username": "akprog",
//       "avatar": "https://i.pravatar.cc/250?img=54",
//       "postal_code": "300412318",
//       "id": "akprog"
//     }
//   ]

export const retrieveUserInfoService = async (username) => {
  return await axios
    .get(RETRIVE_USER_INFO + username, {
      params: { dateWasReqSent: Date.now() },
    })
    .then((res) => {
      if (res.status === 200) {
        return {
          succeeded: true,
          data: res.data,
        };
      }
    })
    .catch((error) => {
      return {
        succeeded: false,
        data: error,
      };
    });
};