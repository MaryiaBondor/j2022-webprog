package org.example;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

public class HomeServlet extends HttpServlet {


    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.printf("Inside doGet()");
        PrintWriter writer = resp.getWriter();
        writer.println("Hello from servlet. Server time is " + new Date());

    }

    @Override
    public void init() throws ServletException {
        super.init();
        System.out.printf("Inside init()");
    }

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.service(req, resp);
        System.out.printf("Inside service()");
    }

    @Override
    public void destroy() {
        super.destroy();
        System.out.printf("Inside destroy()");
    }
}
