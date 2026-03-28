package org.isa.apijava.controller;

import org.isa.apijava.entity.SubleaseListing;
import org.isa.apijava.service.ListingService;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/listings")
    public void postListing(@RequestBody SubleaseListing listing){
        service.postLeasingListing(listing);
    }
}
