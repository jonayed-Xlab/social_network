package springboot.backend.api.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.backend.api.model.Status;
import springboot.backend.api.model.Users;
import springboot.backend.api.repository.StatusRepository;

@Service
public class StatusService {
	
	@Autowired
	StatusRepository statusRepository;
	
	@Autowired
	UserService userService;
	
	public Status submitDataIntoDB(Status status) {
		return statusRepository.save(status);
	}
	
	public ArrayList<Status> retiveStatus(){
		ArrayList<Status> statusList = statusRepository.findAll();
		
		for(int i=0;i<statusList.size();i++) {
			Status statusItem = statusList.get(i);
			
			statusItem.setUserName(userService.displayMetaDataofUser(statusItem.getUserId()).getName());
		}
		return statusList;
		
	}
}
