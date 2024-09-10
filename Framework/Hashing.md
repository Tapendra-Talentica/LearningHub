Hashing is a process that takes an input (like a password or a file) and converts it into a fixed-size string of characters, which is usually a sequence of numbers and letters. This output is called a "hash" or "hash value."

## Why use hashing?
1. Secure Password Storage: Hashing is used to securely store hashed value of the password in databases. 
2. Data Integrity: Hashing can verify that data has not been tampered with.
3. Unique Identifiers: Hashes can create unique identifiers for data like files or messages

## How hashing works?
1. Input Data: You start with some input data (like a password).
2. Hash Function: This data is passed through a hash function. A hash function takes input data of any size and outputs a fixed-size hash value.
3. Output Hash: The output is a unique hash that represents the input data. If the input data changes even slightly, the hash will be completely different.


Hashing in Node.js
Hashing is a process that takes an input (like a password or a file) and converts it into a fixed-size string of characters, which is usually a sequence of numbers and letters. This output is called a "hash" or "hash value." Hashing is commonly used in security-related tasks, such as storing passwords securely, checking data integrity, or creating digital signatures.

Why Use Hashing?
Secure Password Storage: Hashing is used to securely store passwords in databases. Instead of storing the actual password, the hashed value of the password is stored. Even if someone gets access to the database, they won't know the actual passwords.

Data Integrity: Hashing can verify that data has not been tampered with. For example, when downloading a file, a hash can be used to check that the file has not been corrupted or modified.

Unique Identifiers: Hashes can create unique identifiers for data like files or messages. This is useful in caching or when dealing with large datasets.

## How Hashing Works:
* Input Data: You start with some input data (like a password).
* Hash Function: This data is passed through a hash function. A hash function takes input data of any size and outputs a fixed-size hash value.
* Output Hash: The output is a unique hash that represents the input data. If the input data changes even slightly, the hash will be completely different.

## Important Properties of Hash Functions:
* Deterministic: The same input will always produce the same hash.
* Fast: Hashing should be quick to compute.
* Fixed Size: The hash output is always a fixed size, regardless of input size.
* Irreversible: It should be computationally impossible to reverse a hash to get the original input.
* Collision Resistant: No two different inputs should produce the same hash.
* A salt is a random string added to a password before hashing it to make the hash more secure.

## Common Hashing Algorithms
* MD5
* SHA-1
* SHA-256

## When to use Hasing in backend
* Storing Secret Creds
* Verfiy Data Integrity
* Creating Unique Identifiers