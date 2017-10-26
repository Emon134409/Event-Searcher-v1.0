import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;

	public class OracleJDBC {

		@SuppressWarnings("unused")
		public static void main(String []args){
			Statement statement=null;
			ResultSet result=null;
		System.out.println("Oracle Testing");
		try{
			Class.forName("oracle.jdbc.driver.OracleDriver");
		}catch(ClassNotFoundException e){
			System.out.println("Where is your Oracle JDBC Driver?");
			e.printStackTrace();
			return;
		}
		System.out.println("Oracle JDBC driver Registered");

		Connection connection = null;
		try{
			connection = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:oracle","SHOFOL","andme420");
			statement = connection.createStatement();
		    result = statement.executeQuery("SELECT ID, Name FROM Users" );
		    ResultSetMetaData metaData = result.getMetaData();
		    int numberOfColumns = metaData.getColumnCount();
			System.out.println( "Authors Table of Books Database:\n" );
		 for ( int i = 1; i <= numberOfColumns; i++ )
		 System.out.printf( "%-8s\t",metaData.getColumnCount() );
		 System.out.println();
		 while(result.next() )
		 {
		 for ( int i = 1; i <= numberOfColumns; i++ )
		 System.out.printf( "%-8s\t",metaData.getCatalogName(i) );
		 System.out.println();
		 } 
		}
		catch (SQLException e){
			System.out.println("Connection Failed! Check output consol");
			e.printStackTrace();
			return;
		}
		if(connection!=null){
			System.out.println("You made it,take control your database now");
		 } 
		else{
			System.out.println("failed");
		}
		}}
                             