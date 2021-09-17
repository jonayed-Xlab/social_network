package springboot.backend.api.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import springboot.backend.api.model.Users;

@Repository
public interface UserRepository extends CrudRepository<Users, Integer> {
	
	Users findByUserId(String userId);
}
