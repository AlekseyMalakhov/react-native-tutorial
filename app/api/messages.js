import client from "./client";

const send = (message) => client.post("/messages", message);

export default { send };
