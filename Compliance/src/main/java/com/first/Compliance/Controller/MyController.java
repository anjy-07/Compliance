package com.first.Compliance.Controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    @RequestMapping(value="/add/{a}/{b}")
    public Integer addNumbers(@PathVariable Integer a, @PathVariable Integer b){
        Integer c = a+b;

        return c;
    }


}
