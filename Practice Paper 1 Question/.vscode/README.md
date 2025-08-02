# Programming Fundamentals Practice Questions

# Q1

## Function description

Complete the function `canAccessLibrary` that takes in:

-   `isOpen` - a boolean indicating whether the library is currently open
-   `hasStaffID` - a boolean indicating whether the person has a staff ID
-   `hasStudentID` - a boolean indicating whether the person has a student ID

## Returns

Return true if the person can access the library, false otherwise. A person can access the library if the library is open AND they have either a staff ID OR a student ID.

## Sample 1

|             |                                                                  |
| ----------- | ---------------------------------------------------------------- |
| input       | canAccessLibrary(true, true, false)                              |
| returns     | true                                                             |
| Explanation | The library is open and person has staff ID, so they can access. |

## Sample 2

|             |                                                                                 |
| ----------- | ------------------------------------------------------------------------------- |
| input       | canAccessLibrary(false, false, true)                                            |
| returns     | false                                                                           |
| Explanation | The library is closed, so they cannot access regardless of having a student ID. |

---

<div style="page-break-after: always;"></div>

# Q2

## Function description

Complete the function `checkCase` that takes in:

-   `char` - a single character that can be 'a', 'b', 'c', 'A', 'B', or 'C'

## Returns

Return "upper" if the character is uppercase, "lower" if the character is lowercase, or "invalid" if the character is not one of the specified characters.

## Sample 1

|             |                                                    |
| ----------- | -------------------------------------------------- |
| input       | checkCase('A')                                     |
| returns     | "upper"                                            |
| Explanation | The character 'A' is uppercase, so return "upper". |

## Sample 2

|             |                                                    |
| ----------- | -------------------------------------------------- |
| input       | checkCase('b')                                     |
| returns     | "lower"                                            |
| Explanation | The character 'b' is lowercase, so return "lower". |

---

<div style="page-break-after: always;"></div>

# Q3

## Function description

Complete the function `buffetPrice` that takes in:

-   `mealType` - the type of meal (either "Lunch" or "Dinner")
-   `isStudent` - a boolean indicating whether the person is a student

## Returns

Return the price of the buffet meal as a number. For "Lunch", the price is $10 for students and $15 for non-students. For "Dinner", the price is $20 for students and $30 for non-students.

## Sample 1

|             |                              |
| ----------- | ---------------------------- |
| input       | buffetPrice("Lunch", true)   |
| returns     | 10                           |
| Explanation | A student's lunch costs $10. |

## Sample 2

|             |                                   |
| ----------- | --------------------------------- |
| input       | buffetPrice("Dinner", false)      |
| returns     | 30                                |
| Explanation | A non-student's dinner costs $30. |

---

<div style="page-break-after: always;"></div>

# Q4

## Function description

Complete the function `sumEvenNumbers` that takes in:

-   `n` - a positive integer

## Returns

Return the sum of all even numbers from 1 to n (both inclusive).

## Sample 1

|             |                                                          |
| ----------- | -------------------------------------------------------- |
| input       | sumEvenNumbers(5)                                        |
| returns     | 6                                                        |
| Explanation | The even numbers from 1 to 5 are: 2, 4. Sum = 2 + 4 = 6. |

## Sample 2

|             |                                                                                   |
| ----------- | --------------------------------------------------------------------------------- |
| input       | sumEvenNumbers(10)                                                                |
| returns     | 30                                                                                |
| Explanation | The even numbers from 1 to 10 are: 2, 4, 6, 8, 10. Sum = 2 + 4 + 6 + 8 + 10 = 30. |

---

<div style="page-break-after: always;"></div>

# Q5

## Function description

Complete the function `countOddNumbers` that takes in:

-   `n` - a positive integer

## Returns

Return the count of odd numbers from 1 to n.

## Sample 1

|             |                                                      |
| ----------- | ---------------------------------------------------- |
| input       | countOddNumbers(5)                                   |
| returns     | 3                                                    |
| Explanation | The odd numbers from 1 to 5 are: 1, 3, 5. Count = 3. |

## Sample 2

|             |                                                             |
| ----------- | ----------------------------------------------------------- |
| input       | countOddNumbers(10)                                         |
| returns     | 5                                                           |
| Explanation | The odd numbers from 1 to 10 are: 1, 3, 5, 7, 9. Count = 5. |

---

<div style="page-break-after: always;"></div>

# Q6

## Function description

Complete the function `addPadding` that takes in:

-   `str` - a string to add padding to
-   `padding` - the number of "#" characters to add on both sides

## Returns

Return the string with the specified number of "#" characters added on both sides.

## Sample 1

|             |                                                |
| ----------- | ---------------------------------------------- |
| input       | addPadding("apple", 3)                         |
| returns     | "###apple###"                                  |
| Explanation | Add 3 "#" characters on both sides of "apple". |

## Sample 2

|             |                                                |
| ----------- | ---------------------------------------------- |
| input       | addPadding("hello", 2)                         |
| returns     | "##hello##"                                    |
| Explanation | Add 2 "#" characters on both sides of "hello". |

---

<div style="page-break-after: always;"></div>

# Q7

## Function description

Complete the function `findPairWithSum` that takes in:

-   `numbers` - an array of integers
-   `targetSum` - the target sum to find

## Returns

Return an array containing two numbers from the input array that sum to the target sum. Assume there is exactly one such pair.

## Sample 1

|             |                                              |
| ----------- | -------------------------------------------- |
| input       | findPairWithSum([1, 2, 3, 4], 5)             |
| returns     | [1, 4]                                       |
| Explanation | The numbers 1 and 4 from the array sum to 5. |

## Sample 2

|             |                                                |
| ----------- | ---------------------------------------------- |
| input       | findPairWithSum([10, 15, 3, 7], 17)            |
| returns     | [10, 7]                                        |
| Explanation | The numbers 10 and 7 from the array sum to 17. |

---

<div style="page-break-after: always;"></div>

# Q8

## Function description

Complete the function `calculateTotalValue` that takes in:

-   `products` - an array of product objects, each with properties: name, price, and quantity

## Returns

Return the total value of all products. Total value = sum of (price × quantity) for each product.

## Sample 1

|             |                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------ |
| input       | calculateTotalValue([{name: "Apple", price: 1.5, quantity: 10}, {name: "Banana", price: 0.8, quantity: 20}]) |
| returns     | 31                                                                                                           |
| Explanation | Apple: 1.5 × 10 = 15, Banana: 0.8 × 20 = 16. Total = 15 + 16 = 31.                                           |

## Sample 2

|             |                                                                     |
| ----------- | ------------------------------------------------------------------- |
| input       | calculateTotalValue([{name: "Laptop", price: 999.99, quantity: 1}]) |
| returns     | 999.99                                                              |
| Explanation | Laptop: 999.99 × 1 = 999.99.                                        |

---

<div style="page-break-after: always;"></div>

# Q9

## Function description

Complete the function `countVowels` that takes in:

-   `str` - a string to count vowels in

## Returns

Return the number of vowels (a, e, i, o, u - both uppercase and lowercase) in the string.

## Sample 1

| | |
| input | countVowels("hello") |
| returns | 2 |
| Explanation | The vowels in "hello" are 'e' and 'o'. Count = 2. |

## Sample 2

|             |                                                               |
| ----------- | ------------------------------------------------------------- |
| input       | countVowels("PROGRAMMING")                                    |
| returns     | 3                                                             |
| Explanation | The vowels in "PROGRAMMING" are 'O', 'A', and 'I'. Count = 3. |

---

<div style="page-break-after: always;"></div>

# Q10

## Function description

Complete the function `findSecondLargest` that takes in:

-   `numbers` - an array of integers with at least 2 elements

## Returns

Return the second largest number in the array.

## Sample 1

|             |                                                       |
| ----------- | ----------------------------------------------------- |
| input       | findSecondLargest([1, 5, 3, 9, 2])                    |
| returns     | 5                                                     |
| Explanation | The largest number is 9, and the second largest is 5. |

## Sample 2

|             |                                                       |
| ----------- | ----------------------------------------------------- |
| input       | findSecondLargest([5, 5, 3, 2])                       |
| returns     | 3                                                     |
| Explanation | The largest number is 5, and the second largest is 3. |
