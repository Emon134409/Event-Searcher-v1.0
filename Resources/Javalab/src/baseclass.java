/**This is a program for  example of overloading and overriding
 * /
 * @author Shofol
 *
 */
import java.util.Scanner;
public class baseclass {
public static void main(String[]args){
	System.out.print("This is the main class"+"\n");
overload a=new overload();
overload b=new overload(2,4);

Scanner input=new Scanner(System.in);
System.out.print("Enter two numbers");
int x=input.nextInt();
int y=input.nextInt();
overload c= new overrided();
c.test(x,y);
}
}//end of class
