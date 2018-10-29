import axios from 'axios';
import { WebSocketBridge } from 'django-channels'

export const GETTINGRACE = 'GETTINGRACE';
export const GOTRACE = 'GOTRACE';
export const GOTQUIZ = 'GOTQUIZ'

export const SENDINGANSWER = 'SENDINGANSWER'

export const ERROR = 'ERROR';

const webSocketBridge = new WebSocketBridge();

// TODO: Change url for deployment
// const url = 'ws://spaceracetrivia.herokuapp.com/ws/quiz';
const url = 'ws://http://127.0.0.1:8000'
const httpReq = 'http://127.0.0.1:8000'
// const httpReq='spaceracetrivia.herokuapp.com'
export const gettingRace = (slug) => {
  return dispatch => {
    dispatch({type: GETTINGRACE})
    webSocketBridge.connect(`${url}/${slug}/`);
    let slugObject = { slug: slug}
    webSocketBridge.socket.addEventListener('open', function() {
      console.log("Connected to WebSocket");
      webSocketBridge.send(slugObject)
    })
    webSocketBridge.listen(function(action, stream) {
      console.log(action, stream);
      dispatch({type: GOTRACE, payload: action})
    })
  }
}

export const getQuiz = slug => {
  return dispatch => {
    axios.get(`${httpReq}/db/${slug}/`)
      .then(response => {
        dispatch({type: GOTQUIZ, payload: response.data})
      })
      .catch(err => {
        dispatch({type: ERROR, payload: err})
      })
  }
}

export const nextQuestion = (slug) => {
  return dispatch => {
    let obj = {
      "index": 0,
      "slug": slug
    }
    webSocketBridge.send(obj)

    webSocketBridge.listen(function(action, stream) {
      console.log(action, stream);
      dispatch({type: GOTRACE, payload: action})
    })
  }
}

export const sendingAnswer = (data) => {
  return dispatch => {
    dispatch({type: SENDINGANSWER})
    let student = JSON.parse(localStorage.getItem('student'))
    let allData = {...student, ...data}
    console.log('all data', allData)
    webSocketBridge.send(allData)

    webSocketBridge.listen(function(action, stream) {
      console.log(action, stream);
      dispatch({type: GOTRACE, payload: action})
    })
  }
}