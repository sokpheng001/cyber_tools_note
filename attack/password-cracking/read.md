# Password Cracking 001

- Topics
    - Cryptography
        Cryptography is the technique of obfuscating or coding data, ensuring (or trying to) that only the person who is meant to see the information–and has the key to break the code–can read it.

    -   Hashing
        Hashing is a process of converting input data (often of variable length) into a fixed-size string of characters, typically a hash value or digest, using a mathematical algorithm. The primary purpose of hashing is to generate a unique representation of the input data, making it suitable for efficient data retrieval, integrity verification, and password storage. Hash functions are designed to be one-way, meaning it should be computationally infeasible to reverse the process and obtain the original data from its hash value.

    - Salt
        A salt is random data fed as an additional input to a one-way function that hashes a password. Salting helps defend against attacks that use rainbow tables, by vastly growing the size of table needed for a successful attack. It also helps protect passwords that occur multiple times in a database, as a new salt is used for each password instance. Knowing the salt would not help the attacker.
        ![alt text](https://miro.medium.com/v2/resize:fit:720/format:webp/1*fiJPfTWkUFhyfSMYFzpfTg.png)

- References
    - https://systemweakness.com/p4-w0rd-r4-k1ng-0b101-56fcbddfbd64