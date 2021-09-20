package com.app.springboot.message.model;

public class Message {
    private String textMessage;
	

	private String phoneNumber;
	

	private String time;

	
	private String status;
	
	
	public Message() {
		
	}
	
	public Message(String textMessage, String phoneNumber, String time, String status) {
		super();
		this.textMessage = textMessage;
		this.phoneNumber = phoneNumber;
		this.time = time;
		this.status = status;
	}
	

	public String getTextMessage() {
		return textMessage;
	}
	public void setTextMessage(String textMessage) {
		this.textMessage = textMessage;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
}
