/**
 * This is the derived class of overload class
 * @author Shofol
 *
 */
public class overrided extends overload {
	@override
	public void test(int a,int b){
		System.out.print("This is from derived class");
		try{
			int result =a/b;
			}
			catch(ArithmeticException e)
			{
				System.out.print(e);
			}
	}

}
