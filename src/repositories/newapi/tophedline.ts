import axios from '../../libs/axios/client'
import Response from '../Response'
import env from '../../libs/env'

export type Data = {
  status: string
  totalResults: number
  articles: Article[]
}

export type Article = {
  source: Source
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: Date
  content: null
}

export type Source = {
  id: null
  name: string
}

export async function get(
  country: 'jp',
  pageSize: number
): Promise<Response<Data>> {
  const res = await axios.get<Data>(
    `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=${pageSize}&apiKey=${env.newApiKey}`
  )
  if (res.status !== 200) {
    return Response.createErrorResponse(res.statusText)
  }
  return Response.createOKResponse(res.data)
}

export default { get }
