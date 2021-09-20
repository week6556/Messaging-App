package com.app.springboot.message.controller;

import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.app.springboot.message.model.Message;
import com.app.springboot.message.service.FirebaseService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000/")
public class MessageController {
	@Autowired
	private FirebaseService firebaseService;
	
	@GetMapping("/messages")
	public List<Message> getMessages() throws InterruptedException, ExecutionException {
		return firebaseService.getListMessage(); 
		
	}

	@PostMapping("/createMessage")
	public String postMessages(@RequestBody Message message) throws ExecutionException, InterruptedException {
		return firebaseService.saveMessageDetails(message);
		
	}

}
