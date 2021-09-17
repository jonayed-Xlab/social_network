package springboot.backend.api.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.backend.api.model.Post;
import springboot.backend.api.repository.PostRepository;

@Service
public class PostService {
	
	@Autowired
	PostRepository postRepository;
	
	@Autowired
	UserService userService;
	
	public Post submitpostToDB(Post post) {
		return postRepository.save(post);
	}
	
	public ArrayList<Post> retrivePostFromDB(){
		ArrayList<Post> postList = postRepository.findAll();
		for(int i=0; i< postList.size();i++) {
			Post postItem = postList.get(i);
			postItem.setUserName(userService.displayMetaDataofUser(postItem.getUserId()).getName());
		}
		Collections.sort(postList,(a,b)->b.getId()-a.getId());
		return postList;
	}
}
