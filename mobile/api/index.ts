import axios from './axios';

export type geolocationPayload = {
    latitude: number
    longitude: number
}

export const sendGeolocation = (payload: geolocationPayload) => {
    // make the api call here
}

export type pushNotificationPayload = {
    token: string
}

export const sendPushNotificationToken = (payload: pushNotificationPayload) => {
    // make the api call here
}