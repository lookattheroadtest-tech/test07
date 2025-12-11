// Inject Authorization header into every request
function sendingRequest(msg, initiator, helper) {
    msg.getRequestHeader().setHeader("Authorization", "YW5OdGFYUm86WkdWdGJ6RXlNelE9Oj8DP1IWYC0=");
    msg.getRequestHeader().setHeader("accept", "application/json");
}

function responseReceived(msg, initiator, helper) {
    // no-op
}
