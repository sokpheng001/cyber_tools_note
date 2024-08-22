#include<iostream>
#include<string>
#include<vector>

using namespace std;

void wormCreate(){
    // Logic
    
}

class Product{
    private:
      int productId;
      string productName;
      double price;
    public:
      Product(int id, string name, double p){
        productId = id;
        productName = name;
        price = p;
      }
      void setProductId(int id){
        productId = id;
      }  // getters and setters for productId, productName, and price are provided.
      void setProductName(string name){
        productName = name;
      } 
      void setPrice(double p){
        price = p;
      }
      int getProductId(){
        return productId;
      }
      string getProductName(){
        return productName;
      }
      double getPrice(){
        return price;
      }
      void display(){
        cout << "Product ID: " << productId << ", Name: " << productName << ", Price: $" << price << endl;
      }
};


int main(){
    vector<string> names = {"Data"};
    return 0;
}