// ZAP HTTP Sender Script to inject custom Authorization + accept headers
// This runs before every request ZAP makes.

function sendingRequest(msg, initiator, helper) {
    var requestHeader = msg.getRequestHeader();

    // Inject your static Authorization value
    requestHeader.setHeader("Authorization", "YW5OdGFYUm86WkdWdGJ6RXlNelE9Oj8DP1IWYC0=");

    // Ensure JSON Accept header
    requestHeader.setHeader("accept", "application/json");

    msg.setRequestHeader(requestHeader);
}

function responseReceived(msg, initiator, helper) {
    // no-op
}
