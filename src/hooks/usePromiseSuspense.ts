import md5 from 'md5'
import LRU, { Entry } from 'lru-cache'

interface Value {
  resolved: boolean;
  data: any
}

const cache = new LRU<string, Value>(50)

const usePromiseSuspense = <T extends Function, U>(f: T, parameters: any[]): U => {
  const key: string = md5(f.toString() + JSON.stringify(parameters))
  const value: Value = cache.get(key) || { resolved: false, data: null }
  
  if (value.resolved) {
    return value.data
  }

  const promise = f(...parameters)

  promise.then((data: any) => {
    value.resolved = true
    value.data = data

    cache.set(key, value)
  })


  throw promise
}

export default usePromiseSuspense

