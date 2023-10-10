import axios from 'axios'
import { People, User } from '@/app/model/people'

export const getPeople = async () => {
  const res = await axios.get('https://api.slingacademy.com/v1/sample-data/users?offset=10&limit=20')
  return res.data.users as User[];
}