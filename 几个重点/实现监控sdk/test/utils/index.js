import { v4 as uuidv4 } from 'uuid';
export function getCurrentUrl(){
    return window.location.href
}
export function getUuid(){
    return uuidv4()
}
