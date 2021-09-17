package springboot.backend.api.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springboot.backend.api.model.Comment;
import springboot.backend.api.repository.CommentRepository;


@Service
public class CommentService {
	@Autowired
	CommentRepository commentRepository;
	
	@Autowired
	UserService userService;
	
	public Comment submitCommentToDB(Comment comment) {
		return commentRepository.save(comment);
	}
	
	public ArrayList<Comment> retriveAllCommentFromDB(String postId){
		ArrayList<Comment> commentList = commentRepository.findAllByPostId(postId);
		for(int i=0; i< commentList.size();i++) {
			Comment commentItem = commentList.get(i);
			commentItem.setUserName(userService.displayMetaDataofUser(commentItem.getUserId()).getName());
		}
		return commentList;
	}
}
