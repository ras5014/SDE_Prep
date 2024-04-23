#include <bits/stdc++.h>
using namespace std;

class Movie
{
private:
	string title;
	int year;
	string genre;

public:
	Movie(string title, int year, string genre)
	{
		this->title = title;
		this->year = year;
		this->genre = genre;
	}
	// Setters & Getters
	string gettitle()
	{
		return this->title;
	}
	void setTitle(string title)
	{
		this->title = title;
	}
	void printDetails()
	{
		cout << "Title: " << this->title << endl;
		cout << "Year: " << this->year << endl;
		cout << "Genre: " << this->genre << endl;
	}
};

int main()
{
	Movie *m1 = new Movie("The God Father", 1990, "Thriller");
	cout << m1->gettitle() << endl;
	m1->printDetails();
	m1->setTitle("The God Father 2");
	m1->printDetails();
}