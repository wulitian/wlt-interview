import { cloneDeep } from 'lodash'

const cache = []

export function getCache() {
    return cloneDeep(cache)
}

export function addCache(data) {
    cache.push(data)
}

export function clearCache() {
    cache.length = 0
}

