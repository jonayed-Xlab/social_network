package springboot.backend.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.backend.api.model.Users;
import springboot.backend.api.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	public Users submitMetaDataofUser(Users user) {
		return userRepository.save(user);
	}
	
	public Users displayMetaDataofUser(String userid) {
		return userRepository.findByUserId(userid);
	}
}
