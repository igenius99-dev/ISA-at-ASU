package org.isa.apijava.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import javax.xml.validation.Schema;
import java.util.UUID;

@Entity
@Table(name = "Profile", schema = "public")
public class Profile {

    @Id
    private UUID id;
}
