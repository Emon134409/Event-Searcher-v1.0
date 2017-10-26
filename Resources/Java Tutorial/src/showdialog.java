import javax.swing.*;
public class showdialog {
	public static void main(String args[]){
String name=JOptionPane.showInputDialog("What is your fucking name");
String message=String.format("Welcome now you are a Fucker, %s,",name);
JOptionPane.showMessageDialog(null,message);

	}
}
