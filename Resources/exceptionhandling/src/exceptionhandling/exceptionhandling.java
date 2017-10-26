package exceptionhandling;
import java.util.Scanner;
public class exceptionhandling {
public static float mathq(float n,float m){
	float r=n/m;
	return r;
}
public static void main(String[]args){
	boolean i = false;
	while(!i){
	Scanner input= new Scanner(System.in);
	System.out.print("Enter n");
	float n=input.nextInt();
	System.out.print("Enter m");
	float m=input.nextInt();
	float r=mathq(n,m);
	System.out.print(r+"\n");
}}
}
