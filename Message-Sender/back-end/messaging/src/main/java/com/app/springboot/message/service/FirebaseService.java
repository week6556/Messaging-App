package com.app.springboot.message.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Service;

import com.app.springboot.message.model.Message;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;

@Service
public class FirebaseService {
	private static final String COLLECTION_NAME = "messages";

	public String saveMessageDetails(Message message) throws InterruptedException, ExecutionException {
		
		Firestore dbFirestore = FirestoreClient.getFirestore();
		
		ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection(COLLECTION_NAME).document(message.getTime()).set(message);
		
		return collectionsApiFuture.get().getUpdateTime().toString();

		
	}
	

public List<Message> getListMessage() throws InterruptedException, ExecutionException {
		
		Firestore dbFirestore = FirestoreClient.getFirestore();
		
		Iterable<DocumentReference> documentReference = dbFirestore.collection(COLLECTION_NAME).listDocuments();
		
		Iterator<DocumentReference> iterator = documentReference.iterator();
		
		List<Message> messageList = new ArrayList<>();
		Message message = null;
		
		while(iterator.hasNext()) {
			DocumentReference documentReference1 = iterator.next();
			ApiFuture<DocumentSnapshot> future = documentReference1.get();
			DocumentSnapshot document = future.get();
			
			message = document.toObject(Message.class);
			messageList.add(message);
		}
		
		return messageList;
		
	}

}
