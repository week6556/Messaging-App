import React from 'react';
import Card from './Card';
import classes from './Alerts.module.css';

const Alerts = (props) => {

  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button className={classes.submit} onClick={props.onConfirm}>Okay</button>
        </footer>
      </Card>
    </div>
  );
};

export default Alerts;
