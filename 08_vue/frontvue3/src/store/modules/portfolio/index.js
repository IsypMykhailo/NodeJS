export default {
  state: {
    portfolioItem: JSON.parse(localStorage.getItem('portfolioItem')) || [],
    portfolioPop: null
  },
  getters: {
    portfolioItem: (state) => state.portfolioItem,
    user: (state) => state.user,
    getPortfolioPop (state) {
      return state.workElement
    }
  },
  mutations: {
    setPortfolioPush (state, data) {
      state.portfolioItem.push(data)
      localStorage.setItem('portfolioItem', JSON.stringify(state.portfolioItem))
    },
    portfolioItem: (state, data) => {
      state.portfolioItem = data
      localStorage.setItem('portfolioItem', JSON.stringify(data))
    },
    getPortfolioPop (state, data = null) {
      state.portfolioPop = state.portfolioItem.pop()
      localStorage.setItem('portfolioItem', JSON.stringify(state.portfolioItem))
    },
    setPortfolioDelIndex (state, index) {
      state.portfolioItem.splice(index, 1)
      localStorage.setItem('portfolioItem', JSON.stringify(state.portfolioItem))
    }
  },
  actions: {
    apiGetPortfolioItems ({ state, commit, dispatch }) {
      console.log('JWT Token: ')
      console.log(localStorage.getItem('JwtToken'))
      fetch('http://localhost:4000/api/portfolios', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('JwtToken')
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer' // no-referrer, *client
        // body: JSON.stringify(user) // body data type must match "Content-Type" header
      })
        .then(res => {
          console.log(res)
          if (res.status === 200) { return res.json() } else { dispatch('toastInfo', 'Portfolio Not Ready') }
        }
        )
        .then(json => {
          console.log(json)
          if (!json) return
          console.log(json)
          dispatch('toastSuccess', ' Get Items ')
          commit('portfolioItem', json)
        })
        .catch(err => {
          dispatch('errorLogAjax', err)
        })
    },
    apiSendPortfolioItems ({ state, commit, dispatch }) {

    }
  }

}
