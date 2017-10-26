package com.shofol.ch8;

import javax.swing.*;
public class inputn {
	public static void main(String[]args){
String num1= JOptionPane.showInputDialog("Enter num1");
String num2=JOptionPane.showInputDialog("Enter num2");
int n1=Integer.parseInt(num1);
int n2=Integer.parseInt(num2);
int s=n1+n2;
JOptionPane.showMessageDialog(null,"The message is"+s,"tilt",JOptionPane.PLAIN_MESSAGE);
}}