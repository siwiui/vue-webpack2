import * as Fetch from '_services/fetch'
import {apiDomain, Domain} from 'env'
export const apiSignIn = data => Fetch.post(`${Domain}/signin`, data)
export const apiHome = Fetch.get(`${apiDomain}/home`)
