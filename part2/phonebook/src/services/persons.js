import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newPerson => {
  return axios.post(baseUrl, newPerson)
}

const remove = personId => {
  return axios.delete(`${baseUrl}/${personId}`)
}

export default {
  getAll: getAll,
  create: create,
  remove: remove
}