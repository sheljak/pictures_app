import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 2470e3b8d18a8985d562180450ed1454320d99403918f2b51087d8c804b72528'
  }
})
