package springboot.backend.api.repository;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import springboot.backend.api.model.Status;

@Repository
public interface StatusRepository extends CrudRepository<Status, Integer> {

	ArrayList<Status> findAll();
	
}
