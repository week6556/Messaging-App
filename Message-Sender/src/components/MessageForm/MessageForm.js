import { useState } from "react";
import Modal from "../UI/Modal";
import styles from "./MessageForm.module.css";
import MessageHistory from "./MessageHistory";
import Alerts from "../UI/Alerts";

const MessageForm = (props) => {
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredText, setEnteredText] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const [error, setError] = useState();

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const sendHandler = (event) => {
    event.preventDefault();

    const validPhone = enteredPhone.match(/^[0-9]{10}/);

    const messageStatus = "Success"

    if (
      enteredText.trim().length === 0 ||
      enteredPhone.trim().length === 0 ||
      enteredPhone === null ||
      enteredText === null
    ) {
      setError({
        title: "Oops! Invalid input",
        message:
          "Please input valid phone number and message (non-empty values).",
      });
      return;
    }

    if (!validPhone) {
      setError({
        title: "Oops! Invalid phone number",
        message: "Please input valid phone number (10 digits).",
      });
      return;
    }

    const formatDate = new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeStyle: "long",
    }).format(Date.now());

    //submit data
    props.onSend({
      textMessage: enteredText,
      phoneNumber: enteredPhone,
      time: formatDate,
      status: messageStatus,
    });
   
    setEnteredPhone("");
    setEnteredText("");
    setError({
      title: "Yeah!",
      message: "You have successfully sent a massage, check it from history list.",
    });
  };

  const historyHandler = () => {
    setShowHistory(true);
  };

  const hideModal = () => {
    setShowHistory(false);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Alerts
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className={styles.phone}>
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          placeholder="0459999999"
          value={enteredPhone}
          onChange={phoneChangeHandler}
        />
      </div>
      <div className={styles.message}>
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          id="message"
          placeholder="Type your message here ..."
          value={enteredText}
          onChange={textChangeHandler}
        />
      </div>
      <div className={styles.actions}>
        <button className={styles.submit} type="button" onClick={sendHandler}>
          Send
        </button>
        <button type="button" onClick={historyHandler}>
          History
        </button>
      </div>
      {/* </form> */}
      {showHistory ? (
        <Modal onClose={hideModal}>
          <MessageHistory />
        </Modal>
      ) : null}
    </div>
  );
};

export default MessageForm;
