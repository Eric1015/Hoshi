import axios from './axios';

export type geolocationPayload = {
    token: string
    latitude: number
    longitude: number
}

export const sendGeolocation = (payload: geolocationPayload) => {
    // make the api call here
    axios.put(`user/location`, payload)
}

export type pushNotificationPayload = {
    token: string
}

export const sendPushNotificationToken = (payload: pushNotificationPayload) => {
    // make the api call here
    axios.post(`user`, payload)
}