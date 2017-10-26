/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author Shofol
 */

import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;
import javax.swing.*;

//Loading the first page
//Adding picture to the firstpage
public class StartPage  extends JPanel {
	private BufferedImage picture;
	static int w, h;

	public StartPage(){
		try {
			picture = ImageIO.read(new File("E:/Java Project/CSE 4402/user_interface.jpg"));//Reading the image from the computer directory
			// JLabel picLabel = new JLabel(new ImageIcon(picture));
			// add(picLabel);
			w = picture.getWidth();//Getting the width of the picture
			h = picture.getHeight();//Getting the height of the picture
		} catch (IOException e) {
			e.setStackTrace(null);
		}
	}

	public void paint(Graphics g) {
		g.drawImage(picture, 0, 0, null);//This is painting the image in the JFrame
}

	public static void main(String[] args) {
		StartPage pic = new StartPage();
		JFrame f = new JFrame();
		f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);//Closing after the program terminatrs
		f.setLocation(100,0);//Setting the frame in the middle screen
		f.pack();//????
		f.add(pic);//Adding the picture in the JFrame
		f.setSize(w, h);//Setting the size of JFrame according to the size of the picture
		f.setVisible(true);
	}

}
