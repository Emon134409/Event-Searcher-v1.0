package com.shofol.ch8;
import java.sql.*;

import javax.swing.*;

public class javaconnection {
	public static void main(String[] args) throws ClassNotFoundException, SQLException {
	    Class.forName("oracle.jdbc.driver.OracleDriver");
	    Connection conn= DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521/XE","SHOFOL","andme420");
	    JOptionPane.showMessageDialog(null,"Connection has made");
		 try{
		        String q="INSERT INTO ORGANIZER(NAME)values('shofol')";
		        Statement stat=conn.createStatement();
		        stat.execute(q);
		        }
		        catch(Exception e){
		            System.err.print(e);
		        }
	
		        System.out.print("Saved");

	}
}