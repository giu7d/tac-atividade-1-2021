import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

export type Data = {
  "page": number,
  "per_page": number,
  "total": number,
  "total_pages": number,
  "data": {
    "id": number,
    "email": string,
    "first_name": string,
    "last_name": string,
    "avatar": string
  }[]
}

export default async function listUsers(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  try {
    const { page = 0 } = req.query;

    const { data } = await axios.get("https://reqres.in/api/users", {
      params: {
        page
      }
    })
    
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}
