export function getMessages(req, res) {
  res.json({ messages: "Hello Albert!" });
}

export function postMessage(req, res) {
  res.json({ message: "Updating messages..." });
}
