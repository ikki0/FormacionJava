package Rango_Circular;

public class Main {

	public static void main(String[] args) {
		// Rango byte -128 hasta 127
		// Número desborda 5 posiciones
		byte maxByte = Byte.MAX_VALUE;
		byte nByte = (byte) (maxByte + 5);
		System.out.println(nByte);
		
		// Short range: -32768 to 32767
		// desborda 25 posiciones
		short maxShort = Short.MAX_VALUE;
		short nShort = (short) (maxShort + 25);
		System.out.println(nShort);
		
		// int range: -2147483648 to 2147483647
		// desborda: 10000
		int maxInt = Integer.MAX_VALUE;
		int nInt = (int) (maxInt + 10000);
		System.out.println(nInt);
		
		// long range : -9223372036854775808 to 9223372036854775807
		// desborda: 20000
		long maxLong = Long.MAX_VALUE;
		long nLong = (long) (maxLong + 20000);
		System.out.println(nLong);
		
	}

}
