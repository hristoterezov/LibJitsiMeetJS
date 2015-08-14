var Connection = require("./Connection");
var ConferenceEvents = require("./ConferenceEvents");
var StreamEvents = require("./StreamEvents");

/**
 * Namespace for the interface of Jitsi Meet Library.
 */
var LibJitsiMeet = {

    Connection: Connection,
    events: {
        conference: ConferenceEvents
    }

}

module.exports = LibJitsiMeet;
