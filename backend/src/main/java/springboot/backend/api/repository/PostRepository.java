package springboot.backend.api.repository;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import springboot.backend.api.model.Post;

@Repository
public interface PostRepository extends CrudRepository<Post, Integer>{
	ArrayList<Post> findAll();

}
