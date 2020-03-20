const { Expo } = require('expo-server-sdk');

// Accept an array of user tokens and a message that will be sent.
export function sendNotifications(userTokens, message, sound='default') {

    const expo = new Expo();

    // Create the messages that you want to send to clents
    let messages = [];

    // Construct a message (see https://docs.expo.io/versions/latest/guides/push-notifications)
    userTokens.forEach((token) => {
        if (!Expo.isExpoPushToken(token)) continue;

        messages.push({
            to: token,
            sound,
            body: message,
        })  
    })

    let chunks = expo.chunkPushNotifications(messages);
    let tickets = [];
    (async () => {
        // Send the chunks to the Expo push notification service. There are
        // different strategies you could use. A simple one is to send one chunk at a
        // time, which nicely spreads the load out over time:
        for (let chunk of chunks) {
            try {
                let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
                console.log(ticketChunk);
                tickets.push(...ticketChunk);
                // NOTE: If a ticket contains an error code in ticket.details.error, you
                // must handle it appropriately. The error codes are listed in the Expo
                // documentation:
                // https://docs.expo.io/versions/latest/guides/push-notifications#response-format
            } catch (error) {
                console.error(error);
            }
        }
    })();
}