package org.isa.apijava.contoller;

import org.isa.apijava.entity.SubleaseListing;
import org.isa.apijava.service.ListingService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ListingController {

    private final ListingService service;

    public ListingController(ListingService service){
        this.service=service;
    }

    @GetMapping("/listings")
    public List<SubleaseListing> allListing(){
        return service.viewAll();
    }
}
