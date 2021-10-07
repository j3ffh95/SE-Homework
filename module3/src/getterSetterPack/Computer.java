package getterSetterPack;

public class Computer {
//		- Create a Computer class that has 3 variables. The first variable will have a name. The second variable will be the year of the computer. Last variable will be the cost of the computer.
//
//		- All 3 variables should be private instance variables and must use getters to retrieve the data and setters to set the variables.
	private String nameString;
	private int year;
	private float cost;

	public String getNameString() {
		return nameString;
	}

	public void setNameString(String nameString) {
		this.nameString = nameString;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public float getCost() {
		return cost;
	}

	public void setCost(float cost) {
		this.cost = cost;
	}

}
