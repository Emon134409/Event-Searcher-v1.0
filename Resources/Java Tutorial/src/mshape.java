import javax.swing.*;
public class mshape {

	public static void main(String[] args) {
		
		String input= JOptionPane.showInputDialog(null, "Enter Your Choice");
		int choice=Integer.parseInt(input);
		shape p= new shape();
		p.setchoice(choice);
		
		JFrame frame=new JFrame();
		frame.add(p);
		frame.setSize(500, 500);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setVisible(true);
		frame.getColorModel();

	}

}
