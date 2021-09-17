package springboot.backend.api.repository;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import springboot.backend.api.model.Comment;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Integer> {
	ArrayList<Comment> findAllByPostId(String postId);
}
