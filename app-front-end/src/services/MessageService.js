import axios from "axios";

const MESSAGES_GET_API_URL = 'http://localhost:8080/api/messages';
const MESSAGES_POST_API_URL = 'http://localhost:8080/api/createMessage';

const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

class MessageService {
    getMessages() {
        return axios.get(MESSAGES_GET_API_URL);
    }

    createMessage(message) {
        axios.post(MESSAGES_POST_API_URL, message, config);
    }
}

export default new MessageService();