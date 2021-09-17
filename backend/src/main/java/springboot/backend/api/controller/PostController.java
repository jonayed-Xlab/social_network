package springboot.backend.api.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springboot.backend.api.model.Post;
import springboot.backend.api.service.PostService;

@RestController
@RequestMapping("/post")
public class PostController {
	
	@Autowired
	PostService postService;
	
	@PostMapping("")
	public Post submitUserPost(@RequestBody Post post) {
		return postService.submitpostToDB(post);
	}
	
	@GetMapping("")
	public ArrayList<Post> getAllPost(){
		return postService.retrivePostFromDB();
	}
}
