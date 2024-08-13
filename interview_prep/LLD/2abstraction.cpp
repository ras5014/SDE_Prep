#include <bits/stdc++.h>
using namespace std;

class Circle
{
    double pi = 3.14159;
    double radius;

public:
    Circle(double radius)
    {
        this->radius = radius;
    }
    double getArea()
    {
        return pi * pow(radius, 2);
    }
};

int main()
{
    Circle *c1 = new Circle(5);
    cout << c1->getArea() << endl;
}