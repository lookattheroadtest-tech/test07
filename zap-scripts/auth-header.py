# Inject Authorization header into every request made by ZAP

def sendingRequest(msg, initiator, helper):
    header = msg.getRequestHeader()
    header.setHeader("Authorization", "YW5OdGFYUm86WkdWdGJ6RXlNelE9Oj8DP1IWYC0=")
    header.setHeader("accept", "application/json")

def responseReceived(msg, initiator, helper):
    pass
