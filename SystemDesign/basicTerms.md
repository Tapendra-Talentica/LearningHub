In system design, several key terms are frequently used to describe the architecture, components, and methodologies involved in creating scalable, efficient systems. Here are some common terms and their meanings:

### 1. **Latency**
   - The time taken for a request to travel from the source to the destination and back. It affects system responsiveness and is typically measured in milliseconds (ms).

### 2. **Throughput**
   - The number of operations or requests a system can handle per unit of time, usually measured in requests per second (RPS).

### 3. **Scalability**
   - The ability of a system to handle increasing loads by adding resources (either vertically or horizontally). Scalability ensures the system can accommodate growth.

   - **Vertical Scaling:** Adding more power (CPU, RAM) to a single machine.
   - **Horizontal Scaling:** Adding more machines to the system (e.g., sharding).

### 4. **Load Balancer**
   - A component that distributes incoming traffic across multiple servers to ensure no single server gets overwhelmed and to optimize resource usage.

### 5. **Cache**
   - A storage layer that temporarily stores frequently accessed data to reduce latency and load on the database or backend services. Common types include:
     - **In-memory cache (e.g., Redis, Memcached)** for fast access.
     - **Browser cache** to store static assets locally.

### 6. **Database Sharding**
   - The process of splitting a database into smaller, more manageable pieces, called shards. Each shard holds a subset of the data to distribute load and improve performance.

### 7. **Partitioning**
   - Dividing a large dataset into smaller, more manageable parts to optimize performance. Partitioning can be based on factors like date ranges, geographical location, or user ID.

### 8. **Consistency, Availability, Partition Tolerance (CAP Theorem)**
   - A principle that states in a distributed system, only two of the following three properties can be guaranteed at the same time:
     - **Consistency:** All nodes see the same data at the same time.
     - **Availability:** Every request receives a response (success/failure).
     - **Partition Tolerance:** The system continues to function even if communication between nodes is lost.

### 9. **Eventual Consistency**
   - A consistency model used in distributed systems where all replicas will eventually converge to the same state, even if they are temporarily inconsistent.

### 10. **Replication**
   - The process of copying data from one database server to another for redundancy and fault tolerance. Types include:
     - **Master-Slave Replication:** One master node for writes, multiple slave nodes for read operations.
     - **Multi-Master Replication:** Multiple nodes can perform write and read operations.

### 11. **Load Shedding**
   - A technique where a system drops some requests during periods of high load to maintain performance for critical operations.

### 12. **Data Partitioning**
   - Distributing data across multiple storage locations to improve performance and scalability. Similar to sharding but can involve various storage systems.

### 13. **Message Queue**
   - A queue where messages or events are stored temporarily before being processed. It enables decoupling of components in distributed systems and ensures asynchronous communication (e.g., RabbitMQ, Kafka).

### 14. **Idempotency**
   - The property of a system where performing an operation multiple times yields the same result, making retries safe (important in fault-tolerant systems).

### 15. **Redundancy**
   - Adding duplicate components (servers, databases) to ensure the system remains available even if some components fail. It ensures fault tolerance.

### 16. **Microservices**
   - An architectural style where the system is broken into small, loosely coupled services, each responsible for a specific functionality. It contrasts with monolithic architecture, where everything is built as a single application.

### 17. **Monolithic Architecture**
   - A traditional architecture where the entire application is built as a single unit. A single codebase manages all functionalities, which can become difficult to scale as the system grows.

### 18. **Rate Limiting**
   - Restricting the number of requests a user or client can make to a server within a given time frame. This protects against Denial of Service (DoS) attacks and prevents server overload.

### 19. **Circuit Breaker Pattern**
   - A design pattern that helps prevent repeated failures in a system. If a service fails repeatedly, the circuit breaker "trips" and temporarily stops further requests until the service is healthy again.

### 20. **Failover**
   - The automatic switching to a redundant or standby system if the primary system fails. It ensures high availability.

### 21. **High Availability (HA)**
   - The ability of a system to remain operational and accessible for long periods of time, even during partial system failures.

### 22. **Fault Tolerance**
   - The ability of a system to continue functioning correctly even when some components fail.

### 23. **Load Testing**
   - Simulating real-world usage to test how a system behaves under heavy load, identifying bottlenecks, and ensuring performance under stress.

### 24. **Reverse Proxy**
   - A server that sits in front of one or more web servers, handling client requests and forwarding them to the appropriate backend server.

### 25. **Content Delivery Network (CDN)**
   - A distributed network of servers that cache content closer to end users to improve load times and reduce latency.

### 26. **Leader Election**
   - A process in distributed systems to choose a single leader from multiple available nodes. The leader is responsible for coordinating actions among the nodes.

### 27. **Quorum**
   - A majority of nodes in a distributed system that must agree to a decision or change, ensuring consistency and preventing conflicts in distributed databases or consensus systems.

### 28. **API Gateway**
   - A layer that sits between the client and backend services. It routes requests to appropriate services, manages authentication, rate limiting, logging, etc.

### 29. **Data Lake**
   - A centralized repository for storing vast amounts of raw data in its native format until it’s needed for analysis.

### 30. **OLTP vs OLAP**
   - **OLTP (Online Transaction Processing):** Systems optimized for transaction-oriented tasks like insert, update, and delete (e.g., e-commerce systems).
   - **OLAP (Online Analytical Processing):** Systems optimized for complex queries and data analysis, typically in a data warehouse.

### 31. **Service Discovery**
   - Mechanism used in microservices architecture to automatically detect and connect services without hardcoding their locations (e.g., using tools like Consul, Zookeeper).

### 32. **Proxy**
   - An intermediary server that forwards requests from clients to other servers, often used for security, load balancing, or caching purposes.

### 33. **API Rate Throttling**
   - Limiting the number of API requests allowed per user, client, or IP address over a specific time period.

### 34. **Zero Downtime Deployment**
   - Deploying updates without interrupting service, ensuring users don’t experience any outages during updates.

### 35. **Graceful Degradation**
   - Designing a system to continue functioning at reduced capacity or with limited functionality in case of a partial failure.

By understanding these key system design terms, you can better approach the architectural decisions needed to build scalable, efficient systems.