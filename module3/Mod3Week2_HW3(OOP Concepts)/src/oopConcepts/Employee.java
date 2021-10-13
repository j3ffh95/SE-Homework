package oopConcepts;

public class Employee extends Person implements PersonInterface {

	private static int idCreator = 0;

	private int id;
	private String jobDescription;
	private double payRate;
	private double totalPay;

	public Employee(String name, String address, String phoneNumber, String jobDescription, double payRate) {
		super(name, address, phoneNumber);
		this.id = ++idCreator;
		this.jobDescription = jobDescription;
		this.payRate = payRate;
	}

	public void setTotalPay(double totalPay) {
		this.totalPay = totalPay;
	}

	public double calculate(int numberOfHours) {
		return numberOfHours * payRate;
	}

	public void display() {
		System.out.println("EMPLOYEE " + this.id);
		System.out.println("Organization: " + PersonInterface.ORGANIZATION);
		System.out.println("Name: " + super.name);
		System.out.println("Address: " + super.address);
		System.out.println("Phone number: " + super.phoneNumber);
		System.out.println("Job description: " + this.jobDescription);
		System.out.printf("Total pay: %.2f \n", this.totalPay);
	}

}