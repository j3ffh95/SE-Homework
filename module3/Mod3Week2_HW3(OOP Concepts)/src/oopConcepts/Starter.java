package oopConcepts;

import java.util.Scanner;

/*
 * 
 * Steps to follow:

1. Create a Person class that should have a parameterized constructor to make objects. 

2. Create 2 classes Employee and Student as subclasses of the Person  class as a super class.

3. To create objects for the  2 subclasses mentioned above, take input from the user (Do not put the hard coded  values in the variables).

4. Create another class as Person1 and declare private properties in it. Also create setter and getter methods in this class as public methods.

5. To test encapsulation create objects for this class with the user input values.

6. Create an Interface PersonInterface. Declare one static final variable for the organization name and create 2 abstract methods in it.
 One should be calculate which should take one int argument and should return a double value. The other method should be of your choice.
 */

public class Starter {

	static Scanner scanner = new Scanner(System.in);

	static String name;
	static String address;
	static String phoneNumber;

	public static void main(String[] args) {

		String userInput;
		byte userInputNumber = 0;
		boolean exit = false;

		do {

			System.out.println("Choose what to do:\n");
			System.out.println("1. Create Employee.");
			System.out.println("2. Create Student.");
			System.out.println("3. Create Person.\n");
			System.out.println("4. Exit.\n.");

			userInput = scanner.nextLine();
			userInputNumber = Byte.parseByte(userInput);

			System.out.println();

			switch (userInputNumber) {
			case 1:
//				createEmployee();
				break;
			case 2:
//				createStudent();
				break;
			case 3:
//				createPerson();
				break;
			case 4:
				exit = true;
			}

			if (!exit) {
				System.out.println("Press <ENTER> to choose another option...");
				scanner.nextLine();
			}

		} while (!exit);

		System.out.println("You have exited the application.");

		scanner.close();
	}

}
