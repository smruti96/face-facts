var base64 = require('base-64');


//User Details action
const faceApiUrl = 'https://api.kairos.com/v2/media?source='

export function getFaceDetails(imageUrl) {
    return function(dispatch){
        return callFaceApi(imageUrl).then(res=>{
            console.log(res)
            dispatch({
                type: 'ANALYZE_IMAGE_SUCCESS',
                ageGroup: res.frames[0].people[0].demographics.age_group,
                gender: res.frames[0].people[0].demographics.gender,
                emotions: res.frames[0].people[0].emotions
            })
        }).catch(error=>{
            console.log(error)
        })
    }
}


function callFaceApi(imageUrl) {
    return fetch(faceApiUrl+imageUrl, {
        method: "POST",
        headers: {
            app_id: '8b3e6954',
            app_key: "c7cade5e297df3d8603b09a9fa032f07"
        }
    }).then(res => {
        console.log(res)
        return res.json()
    }).catch(error=>{
        return error;
    })
}

//Login Action


const loginApiUrl = 'https://staging.urbanpiper.com/api/v1/auth/me/'


export function login(username, password) {
    return function(dispatch) {
        return callLoginApi(username,password)
        .then(res => {
            dispatch({
                type:'LOGIN_SUCCESS',
                payload:res
            })
        }).catch(error=> {
            console.log(error)
        })
    }
}

function callLoginApi(u,p) {
    return fetch(loginApiUrl, {
        method: "GET",
        headers: {
          "Authorization": "Basic " + base64.encode(u + ":" + p)
        }
      }).then(res => {
          return res.json()
      }).catch(error => {
          return error;
      })
}