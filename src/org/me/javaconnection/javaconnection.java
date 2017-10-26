/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.me.javaconnection;

import java.sql.Connection;
import java.sql.DriverManager;
import javax.swing.JOptionPane;

/**
 *
 * @author Shofol
 */
public class javaconnection {
	 Connection conn= null;
    public void connection(){    
    try{
    Class.forName("oracle.jdbc.driver.OracleDriver");
    Connection conn= DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521/XE","SHOFOL","andme420");
    JOptionPane.showMessageDialog(null,"Connection has made");
    }    
    catch (Exception e){
        JOptionPane.showMessageDialog(null,e);
    }
   }
}
    
