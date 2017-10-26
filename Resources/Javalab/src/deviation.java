/**
 * This is a program to get the deviation
*/
/**
 * @author Shofol
 */


public class deviation {
/**
 * @param array this is the array to calculate,n is the number of elements
 * @return dev which is the answer
 */

 public double deviation(double array[],int n){
	 double s=0;
	 for(int i=0;i<n;i++){
		 s=s+array[i];
	 }
	 double avg=s/n;
	 
	 double d = 0;
	 for(int j=0;j<n;j++){
		 d=d+((array[j]-avg)*(array[j]-avg));
	 }
	 double r=d/n;
	 double dev=Math.sqrt(r);
	 
	return dev;//this is the result
	
 }//end of method
}//end of class
