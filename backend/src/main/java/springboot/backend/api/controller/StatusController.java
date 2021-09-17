package springboot.backend.api.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springboot.backend.api.model.Status;
import springboot.backend.api.service.StatusService;


@RestController
@RequestMapping("/status")
public class StatusController {
	
	@Autowired
	StatusService statusService;
	
	@PostMapping("")
	public Status submitStatus(@RequestBody Status status) {
		return statusService.submitDataIntoDB(status);
	}
	@GetMapping("")
	public ArrayList<Status> getAllStatus(){
		return statusService.retiveStatus();
	}
}
