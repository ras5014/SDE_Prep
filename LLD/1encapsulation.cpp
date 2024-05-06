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
    // getters & setters
    string getTitle()
    {
        return this->title;
    }
    string setTitle(string title)
    {
        this->title = "The lord of the rings";
    }
};

int main()
{
    Movie *m1 = new Movie("The Dark Knight", 2008, "Action");
    m1->setTitle("The lord of the rings");
    cout << m1->getTitle() << endl;
}