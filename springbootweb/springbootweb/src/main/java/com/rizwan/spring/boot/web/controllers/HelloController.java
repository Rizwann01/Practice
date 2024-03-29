package com.rizwan.spring.boot.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
@Controller
//@RequestMapping("/hello")
public class HelloController {
	
	@GetMapping("/hello")
	@ResponseBody	
	public String hello(@RequestParam String name) {
		return "hello "+name;
	}
}
