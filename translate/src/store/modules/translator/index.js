/* eslint-disable no-unused-vars */
//const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');
let subscriptionKey = "b45f1080455c4245ac48bb9e76cd3d72";
let endpoint = "https://api.cognitive.microsofttranslator.com";

import { emailToSend } from '../auth/forms'
// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
let location = "westeurope";

export default {
    state: {
        firstWord: '',
        firstLanguage: '',
        secondWord: '',
        secondLanguage: '',
        translationError: null,
        isTranslationLoading: false
    },
    getters: {
        getFirstWord (state) {
            return state.firstWord
        },
        getSecondWord (state) {
            return state.secondWord
        },
        getFirstLanguage (state) {
            return state.firstLanguage
        },
        getSecondLanguage (state) {
            return state.secondLanguage
        },
        getTranslationError (state) {
            return state.translationError
        },
        getIsTranslationLoading (state) {
            return state.isTranslationLoading
        }
    },
    mutations: {
        setFirstWord (state, data) {
            state.firstWord = data
        },
        setSecondWord (state, data) {
            state.secondWord = data
        },
        setFirstLanguage (state, data) {
            state.firstLanguage = data
        },
        setSecondLanguage (state, data) {
            state.secondLanguage = data
        },
        setIsTranslationLoading (state, data) {
            state.isTranslationLoading = data
        }
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        apiGetTranslation ({ state, commit, dispatch }) {
            if (state.firstWord == null || state.firstWord.match(/^ *$/) !== null) {
                state.carsError = 'Error. Search query is empty'
            } else {
                state.translationError = null

                //dispatch('toastInfo', 'Loading translation...')
                commit('setIsTranslationLoading', true)

                dispatch('apiGetTranslationFromServer', word => {
                    commit('setSecondWord', word)
                    console.log(word)
                    //dispatch('toastInfo', 'Loaded successfully')
                    commit('setIsTranslationLoading', false)
                })
            }
        },

        // eslint-disable-next-line no-unused-vars
        apiGetTranslationFromServer ({ state, commit, dispatch }, callback) {
            let dataToSend = []
            dataToSend.push({text: state.firstWord})
            console.log(dataToSend)
            fetch(endpoint + '/translate?api-version=3.0&from=' + state.firstLanguage + '&to=' + state.secondLanguage, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Ocp-Apim-Subscription-Key': subscriptionKey,
                    'Ocp-Apim-Subscription-Region': location,
                    'Content-type': 'application/json',
                    'X-ClientTraceId': uuidv4().toString()
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(dataToSend) // body data type must match "Content-Type" header
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    callback(data[0].translations[0].text)
                })
                .catch(err => dispatch('logError', err))
        },

        apiSaveTranslation({ state, commit, dispatch }, data=null){
            const newTranslation = {
                email: emailToSend,
                firstWord: state.firstWord,
                secondWord: state.secondWord,
                firstLanguage: state.firstLanguage,
                secondLanguage: state.secondLanguage,
            }
            fetch('/api/saveTranslation', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(newTranslation) // body data type must match "Content-Type" header
            })
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    dispatch('toastSuccess', ' Translation Saved')
                    // TODO  уйти на другой маршрут, сообщить что все хорошо
                })
                .catch(err => {
                    dispatch('errorLogAjax', err)
                })
        }
    }
}