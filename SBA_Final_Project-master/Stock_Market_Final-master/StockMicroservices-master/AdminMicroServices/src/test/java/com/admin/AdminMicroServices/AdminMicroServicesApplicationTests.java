package com.admin.AdminMicroServices;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;



@RunWith(SpringRunner.class)
@SpringBootTest
public class AdminMicroServicesApplicationTests {

	@Test
	public void contextLoads() {
	}
	
	@Autowired
	AdminService repo;
	
	@Test
	public void testReturn()
	{
	List<Admin> ls=	repo.getAdmin();
	    assertNotNull(ls);
	}
	
	
	 @InjectMocks
    AdminController manager;
	 
	 @Mock
	 AdminService dao;
     
   
 
    @Before
    public void init() {
        MockitoAnnotations.initMocks(this);
    }
     
    @Test
    public void getAllEmployeesTest()
    {
        List<Company> list = new ArrayList<Company>();
       Company account1 = new Company("Cognizant", "Brain", "20", "description", new Date());
       Company account2 = new Company("IBM", "Brain", "20", "description", new Date());
       Company account3 = new Company("WIPRO", "Brain", "20", "description", new Date());
         
        list.add(account1);
        list.add(account2);
        list.add(account3);
         
        when(dao.getCompany()).thenReturn(list);
         
        //test
        List<Company> empList = manager.getCompanies();
         
        assertEquals(3, empList.size());
        verify(dao, times(1)).getCompany();
    }
     
    @Test
    public void getEmployeeByIdTest()
    {
    	 Company account1 = new Company("Cognizant", "Brain", "20", "description", new Date());
        when(dao.createCompany(account1)).thenReturn( new Company("Cognizant", "Brain", "20", "description", new Date()));
         
        Company emp = manager.createUser(account1);
         
        assertEquals("Cognizant", emp.getCompanyname());
        assertEquals("Brain", emp.getCeo());
        assertEquals("20", emp.getTurnover());
        assertEquals("description", emp.getDescription());
    }
	 

}
