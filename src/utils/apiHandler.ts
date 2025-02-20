import axios from 'axios';

export interface ApiRequest<T> {
  ep: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: T | null;
}

export async function apiHandler<T>({ ep, method = 'GET', body = null }: ApiRequest<T>): Promise<T> {
  try {
    const response = await axios({
      method,
      url: ep,
      data: body
    });

    return response.data;
  } catch (err) {
    throw err as Error;
  }
}
