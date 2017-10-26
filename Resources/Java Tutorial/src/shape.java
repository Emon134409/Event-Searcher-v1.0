import javax.swing.*;
import java.awt.Graphics;
import java.awt.Color;

public class shape extends JPanel{
	public int choice;
	public void setchoice(int userchoice){
		choice=userchoice;
	}

	public void paintComponent(Graphics g){
		super.paintComponent(g);
		int i;		
		//int width= getWidth();
		//int height=getHeight();
		if(choice==1){
				
			for(i=1;i<=20;i++){
			Color c=new Color(20+2*i,100+i,200+i);
			g.setColor(c);
			g.drawOval(250-10*i, 250-10*i,2*10*i, 2*10*i);
			}
			}
		//else{
			//for(i=0;i<20;i++){
			//g.drawOval(10+i*10, 10+i*10, 50+i*10,50+i*10);
			}

	
	}

