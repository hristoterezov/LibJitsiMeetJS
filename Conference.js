/**
 * Creates a Conference object with the given name and properties.
 * @param name name of the conference.
 * @param options Object with properties / settings related to the conference that will be created.
 * @constructor
 */

function Conference(name, options) {
    
}

/**
 * Joins the conference.
 */
Conference.prototype.join = function () {

}

/**
 * Leaves the conference.
 */
Conference.prototype.leave = function () {

}

/**
 * Creates the media streams and returns them via the callback.
 * @param options Object with properties / settings defining which streams(Stream.AUDIO, Stream.VIDEO, Stream.DESKTOP)
 * should be created or some additional configurations about resolution for example.
 * @param successCallback callback that will receive the streams.
 * @param errorCallback callback that will be called if accessing the media streams fail.
 * @return an array of all created MediaStream-s
 */
Conference.prototype.createMediaStreams = function (options, successCallback, errorCallback) {

}

/**
 * Attaches a handler for events(For example - "participant joined".) in the conference.
 * @param eventId the event ID.
 * @param handler handler for the event.
 */
Conference.prototype.addEventListener = function (eventId, handler) {

}

/**
 * Removes event listener
 * @param eventId the event ID.
 */
Conference.prototype.removeEventListener = function (eventId) {

}

/**
 * Receives notifications from another participants for commands / custom events(send by sendCommand method).
 * @param command {String} the name of the command
 * @param handler {Function} handler for the command
 */
Conference.prototype.addPresenceCommandListener = function (command, handler) {

}


/**
 * Removes command  listener
 * @param command {String}  the name of the command
 */
Conference.prototype.removePresenceCommandListener = function (command) {

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
 * Send presence command.
 * @param name the name of the command.
 * @param values Object with keys and values that will be send.
 * @param persistent if false the command will be sent only one time
 * otherwise it will be sent with every system message sent to the other participants.
 * @param successCallback will be called when the command is successfully send.
 * @param errorCallback will be called when the command is not sent successfully.
 */
Conference.prototype.sendPresenceCommand = function (name, values, persistent, successCallback, errorCallback) {

}

/**
 * Sets the display name for this conference.
 * @param name the display name to set
 */
Conference.prototype.setDisplayName = function(name) {

}

/**
 * Start desktop sharing. This will replace the video stream with the desktop sharing stream.
 * @return Stream stream of type DESKTOP
 */
Conference.prototype.startDesktopSharing = function() {

}

/**
 * Stop desktop sharing. This will replace the desktop stream with the video stream.
 * @return Stream stream of type VIDEO
 */
Conference.prototype.endDesktopSharing = function() {

}

module.exports = Conference;