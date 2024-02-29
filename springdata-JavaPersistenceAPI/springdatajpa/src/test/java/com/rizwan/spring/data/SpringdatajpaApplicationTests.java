package com.rizwan.spring.data;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;

import com.rizwan.spring.data.entities.Product;
import com.rizwan.spring.data.repos.ProductRepository;

@SpringBootTest
class SpringdatajpaApplicationTests {
	
	@Autowired
	ApplicationContext context;
	
	@Test
	public void saveProduct() {
		ProductRepository repository= context.getBean(ProductRepository.class);
		Product product =new Product();
		
		//create or set values in sql
		product.setId(1L);
		product.setName("Apple");
		product.setDescription("Super");
		product.setPrice(15000d);
		/*repository.save(product);
		
		
		//to read or get a value i.e certain row like id =1
	    Optional<Product> result = repository.findById(1L);
	    System.out.println(result);
	   */
	    //update a value for a particular column(for all rows of elements) and read all for 
	    product.setPrice(18000d);
	    repository.save(product);
	    repository.findAll().forEach(p->{System.out.println(p.getPrice());});
	  
		
		 //custom finders-single field
		 System.out.println(repository.findByPrice(15000d));
		 System.out.println(repository.findByName("Apple"));
		 
		 //custom finders-multiple fields
		 System.out.println(repository.findByNameAndPrice("Apple",18000d));
	
	}
	

}
