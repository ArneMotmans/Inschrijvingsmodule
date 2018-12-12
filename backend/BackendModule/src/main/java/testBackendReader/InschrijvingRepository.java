package testBackendReader;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;

/**
 * Created by 11502064 on 22/10/2018.
 */

@CrossOrigin
@Repository
public interface InschrijvingRepository extends JpaRepository<Inschrijving, Integer> {

    @Query(value = "select * from inschrijving i where find_in_set(:code, i.securityCode)", nativeQuery = true)
    Optional<Inschrijving> findInschrijvingByCode(@Param("code") String code);
}
