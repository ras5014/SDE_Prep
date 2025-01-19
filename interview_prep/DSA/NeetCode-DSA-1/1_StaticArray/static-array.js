// Static Array

class StaticArray {
  constructor(capacity) {
    this.capacity = capacity; // Maximum size of the array
    this.arr = new Array(capacity).fill(0); // Initialize array with default values (e.g., 0)
    this.length = 0; // Number of real elements in the array
  }

  // Insert at the End (O(1))
  /*
        Check if there's space (length < capacity).
        Insert the value at the length index.
        Increase the length.
    */
  insertEnd(value) {
    if (this.length < this.capacity) {
      this.arr[this.length] = value; // Add value at the next open position
      this.length++; // Increment the length
    } else {
      console.log("Array is full! Cannot Insert");
    }
  }

  // Remove from the End (O(1))
  /*
        Check if the array has elements (length > 0).
        Set the last element (arr[length - 1]) to the default value.
        Decrease the length.
  */
  removeEnd() {}
}

let staticArray = new StaticArray(5);
staticArray.insertEnd(10);
staticArray.insertEnd(20);
console.log(staticArray.arr);
