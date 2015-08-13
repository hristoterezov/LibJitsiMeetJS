/**
 * Represents the conference.
 * @param name name of the conference.
 * @param options Object with properties / settings related to the conference that will be created.
 * @constructor
 */

function Conference(name, options) {
    
}

/**
 * Requests media streams and returns them via the callback.
 * @param options Object with properties / settings related to the streams(audio, video, desktop)
 * that will be requested
 * @param successCallback callback that will receive the streams.
 * @param errorCallback callback that will be called if accessing the media streams fail.
 */
Conference.prototype.startLocalMedia = function (options, successCallback, errorCallback) {

}

/**
 * Attaches a handler for events(For example - "participant joined".) in the conference.
 * @param eventId the event ID.
 * @param handler handler for the event.
 */
Conference.prototype.addEventListener = function (eventId, handler) {

}

/**
 * Receives notifications from another participants for commands / custom events(send by sendCommand method).
 * @param command {String} the name of the command
 * @param handler {Function} handler for the command
 */
Conference.prototype.addCommandListener = function (command, handler) {

}

/**
 * Removes event listener
 * @param eventId the event ID.
 */
Conference.prototype.removeEventListener = function (eventId) {

}

/**
 * Removes command  listener
 * @param command {String}  the name of the command
 */
Conference.prototype.removeCommandListener = function (command) {

}

/**
 * Leaves the conference.
 */
Conference.prototype.leave = function () {

}

/**
 * Sends local streams to the server side.
 * @param stream the stream object.
 * @param successCallback callback that will be called when the stream is sending is successfull.
 * @param errorCallback callback that will be called if something go wrong.
 */
Conference.prototype.sendStream = function (stream, successCallback, errorCallback) {

}

/**
 * Sends text message to the other participants in the conference
 * @param message the text message.
 */
Conference.prototype.sendTextMessage = function (message) {

}

/**
 *
 * @param name the name of the command.
 * @param values Object with keys and values that will be send.
 * @param persistant if false the command will be sent only one time
 * otherwise it will be sent with every system message sent to the other participants.
 * @param successCallback will be called when the command is successfully send.
 * @param errorCallback will be called when the command is not sent successfully.
 */
Conference.prototype.sendCommand = function (name, values, persistant, successCallback, errorCallback) {

}


module.exports = Conference;