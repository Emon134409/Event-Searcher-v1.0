import java.util.NoSuchElementException;
import java.util.Scanner;
public class exception {
public static void main(String[]args){
	boolean bool=true;
	do{
	try{
	int a,b;
	Scanner input=new Scanner(System.in);
	a=input.nextInt();
	b=input.nextInt();
	exceptionhandle j=new exceptionhandle();
	int r=j.vag(a,b);
	System.out.print(r);
	bool=false;
	}
	catch(NoSuchElementException e){
		System.err.print(e+"\n");
		System.out.print("Enter Again\n");
	}
	catch (ArithmeticException i){
		System.err.print(i+"\n");
		System.out.print("Enter Again\n");
		
	}
	}
	while(bool);
}
}
