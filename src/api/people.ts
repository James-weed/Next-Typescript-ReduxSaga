import axios from 'axios'
import { Peoples, User } from '@/app/model/people'

export const getPeople = async (search: any, pageSize: number, page: number) => {
  const res = await axios.get(`https://api.slingacademy.com/v1/sample-data/users?offset=${pageSize * page}&limit=${pageSize}&search=${search}`)
  return res.data as Peoples;
}