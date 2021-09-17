package springboot.backend.api.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springboot.backend.api.model.Comment;
import springboot.backend.api.service.CommentService;

@RestController
@RequestMapping("/comments")
public class CommentController {
	
	@Autowired
	CommentService commentService;
	
	@PostMapping("")
	private Comment submitComment(@RequestBody Comment comment )
	{
		return commentService.submitCommentToDB(comment);
	}
	
	@GetMapping("/{postId}")
	public ArrayList<Comment> getCommentForPost(@PathVariable("postId") String postId){
		return commentService.retriveAllCommentFromDB(postId);
	}

}
