import MessageForm from "../MessageForm/MessageForm";
import styles from "./HomePage.module.css";
import MessageService from "../../services/MessageService";

const HomePage = (props) => {
  const submitMessageHandler = async (data) => {
    const message = JSON.stringify({
      textMessage: data.textMessage,
      phoneNumber: data.phoneNumber,
      time: data.time,
      status: data.status,
    });
    console.log(message);

    MessageService.createMessage(message);
  };

  return (
    <div className={styles.card}>
      <MessageForm onSend={submitMessageHandler} />
    </div>
  );
};

export default HomePage;
