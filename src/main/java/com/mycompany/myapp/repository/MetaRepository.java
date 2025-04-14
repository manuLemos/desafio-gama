package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Meta;
import java.util.List;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Meta entity.
 */

@SuppressWarnings("unused")
@Repository
public interface MetaRepository extends JpaRepository<Meta, Long> {
    @Query("SELECT m FROM Meta m JOIN FETCH m.aluno")
    List<Meta> findAllWithAluno();
}
