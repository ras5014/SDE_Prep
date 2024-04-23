#include <bits/stdc++.h>
using namespace std;

class Circle
{
private:
    double radious;
    double pi;

public:
    // Constructor
    Circle(double r)
    {
        this->radious = r;
        this->pi = 3.142;
    }
    double perimeter()
    {
        return 2 * pi * radious;
    }
    double area()
    {
        return pi * radious * radious;
    }
    void printDetails()
    {
        cout << "Perimeter: " << perimeter() << endl;
        cout << "Area: " << area() << endl;
    }
};

int main()
{
    Circle *c1 = new Circle(5);
    c1->printDetails();
}