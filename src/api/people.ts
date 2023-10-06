import axios from 'axios'
import { People } from '@/app/model/people'

export const getPeople = async () => {
  const res = await axios.get('https://random-data-api.com/api/users/random_user?size=10')
  return res.data as People[];
}