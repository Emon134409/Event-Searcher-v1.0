package com.shofol.ch8;
import java.util.Calendar;
import java.util.Date;

import javax.swing.JOptionPane;

public class date {
public static void main(String[]args){
	Calendar cal = Calendar.getInstance();
	Date dateInstance=null;
	cal.setTime(dateInstance);
	cal.add(Calendar.DATE, -30);
	Date dateBefore30Days = cal.getTime();
	JOptionPane.showMessageDialog(null, cal);
	
	//JOptionPane.showMessageDialog(null, dateBefor30Days);
	
}
}
