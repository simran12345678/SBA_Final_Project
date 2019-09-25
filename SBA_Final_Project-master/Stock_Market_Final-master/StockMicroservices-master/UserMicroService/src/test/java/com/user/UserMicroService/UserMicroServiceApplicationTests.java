package com.user.UserMicroService;

import static org.junit.Assert.assertNotNull;

import java.util.List;

import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserMicroServiceApplicationTests {

	@Test
	public void contextLoads() {
	}

	@Autowired
	UserRepository repo;
	
	@Autowired
	UserController control;
	
	@Test
	public void testReturn()
	{
	List<User> ls=	control.getUsers();
	    assertNotNull(ls);
	}
	
}
