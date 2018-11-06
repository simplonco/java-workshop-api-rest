package co.simplon.avent.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.simplon.avent.model.Link;
import co.simplon.avent.repository.LinkRepository;

@RestController
@RequestMapping("/api/link")
public class LinkController {

	private LinkRepository linkRepo;
	
	public LinkController(LinkRepository linkRepo) {
		this.linkRepo = linkRepo;
	}

	@GetMapping
	public List<Link> getDailyLinks() {
		// Today date
		LocalDate today = LocalDate.now();
		return linkRepo.findByDate(today);
	}
}
