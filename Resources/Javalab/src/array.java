/**
 * This a program to initialize a double array and pass it to a method named deviation
 * to get the answer
*/
/**
 * @author Shofol
 */
import java.util.Scanner;
public class array {
	

	public static void main(String[] args) {
		Scanner input=new Scanner(System.in);
		int choice=input.nextInt();// total number of elements of the array
		double []array= new double[choice];
		for(int i=0;i<choice;i++){
			array[i]=input.nextDouble();
		}
		deviation a=new deviation();
		double ans= a.deviation(array, choice);// passing the array
		System.out.print("Deviation"+ans);
	}
}//end of class
