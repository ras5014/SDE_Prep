#include <bits/stdc++.h>
using namespace std;

class Vehicle
{
    string name;
    string model;

public:
    Vehicle(string name, string model)
    {
        this->name = name;
        this->model = model;
    }
    void printDetails()
    {
        cout << "Name: " << name << endl;
        cout << "Model: " << model << endl;
    }
    string getName()
    {
        return this->name;
    }
    string getModel()
    {
        return this->model;
    }
};

class Fuelcar : public Vehicle
{
    int fuelCapacity;

public:
    Fuelcar(string name, string model, int fuelCapacity) : Vehicle(name, model)
    {
        this->fuelCapacity = fuelCapacity;
    }
    void printDetails()
    {
        cout << "Name: " << this->getName() << endl;
        cout << "Model: " << this->getModel() << endl;
        cout << "Fuel Capacity: " << fuelCapacity << endl;
    }
};

int main()
{
    Fuelcar *f1 = new Fuelcar("Toyota", "Corolla", 50);
    f1->printDetails();
}

// Single Inheritance