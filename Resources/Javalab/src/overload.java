
public class overload {
	int a,b;
public overload(){
	System.out.print("This is constructor without param"+"\n");
}
public overload(int x,int y){
	a=x;
	b=y;
	System.out.print("This is constructor with params"+a+b+"\n");
}

public void test(int a,int b){
	System.out.print("This is from main class");
}
}
