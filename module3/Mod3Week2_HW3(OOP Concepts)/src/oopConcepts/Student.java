package oopConcepts;

public class Student extends Person implements PersonInterface {

	private static int idCreator = 0;

	private int id;
	private String course;
	private double grade1;
	private double grade2;
	private double grade3;
	private double finalGrade;

	public Student(String name, String address, String phoneNumber, String course, double grade1, double grade2,
			double grade3) {
		super(name, address, phoneNumber);
		this.id = ++idCreator;
		this.course = course;
		this.grade1 = grade1;
		this.grade2 = grade2;
		this.grade3 = grade3;
	}

	public void setFinalGrade(double finalGrade) {
		this.finalGrade = finalGrade;
	}

	public double calculate() {
		return ((grade1 + grade2 + grade3) / 3);
	}

	public void display() {
		System.out.println("STUDENT " + this.id);
		System.out.println("Organization: " + PersonInterface.ORGANIZATION);
		System.out.println("Name: " + super.name);
		System.out.println("Address: " + super.address);
		System.out.println("Phone number: " + super.phoneNumber);
		System.out.println("Course: " + this.course);
		System.out.printf("Final grade: %.2f\n", this.finalGrade);
	}

}
