import { useEffect, useState } from "react";
import MessageService from "../../services/MessageService";


const MessageHistory = (props) => {

const [messages, setMessages] = useState([]);

const [showError, setShowError] = useState();

  useEffect(() => {
      MessageService.getMessages().then(res => {
        setMessages(res.data);
        console.log(res.data);
        setShowError(false);
        if (!res.data || res.data === null || res.data.length ===  0) {
          setShowError(true);
        }
      });    
  }, []);

  return (
    <div>
        <h2 className="text-center">History Messages</h2>

        {showError ? <p className="text-center">No data</p> :
        <table className="table table-hover text-black"> 
        <thead>
          <tr>
            <td>Phone Number</td>
            <td>Message</td>
            <td>Time Sent</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {
            messages.map(
              message =>
              <tr key = {message.time}>
                <td>{message.phoneNumber}</td>
                <td>{message.textMessage}</td>
                <td>{message.time}</td>
                <td>{message.status}</td>
                </tr>
            )
          }
        </tbody>

        </table>}

    </div>
  );
};

export default MessageHistory;
