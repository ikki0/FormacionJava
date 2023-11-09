package secuencia_escape;

public class Secuencia_escape {
	public static void main(String[] args) {
		System.out.print("pan\ncon\ntomate\n");
		System.out.print("pan\tcon\ttomate\n");
		System.out.println("pan\\con\"tomate\"");
		System.out.println("pan con 'tomate'");
		System.out.println("pan con 'tomate'\r");
		System.out.println("pan con 'tomate'\b");
		
	}
}
