//from chat gpt


// In Node.js, you can perform clustering to utilize multiple CPU cores effectively, thus improving the performance of your application. Clustering allows you to spawn multiple instances of your application (workers) that can handle incoming requests concurrently

const { compareSync } = require("bcrypt")

// 1.cluster.isMaster: This property returns true if the current process is the master process, and false otherwise.
// 2.cluster.fork(): This method is used to spawn a new worker process.
// 3.cluster.on('exit', ...): This event is emitted when a worker process dies.
// 4.Inside the else block, we create an HTTP server in each worker to handle incoming requests.

// You'll see that multiple worker processes are spawned, and each worker process will handle incoming HTTP requests concurrently. This way, your application can utilize the available CPU cores efficiently.

// how to work when request come


// When a request comes to the server created in the worker processes, each worker will handle the request independently. The incoming requests will be distributed among the worker processes by the operating system or the underlying load balancer (if any).

// Here's how the code works when a request comes:

// When a request arrives at the server (e.g., http://localhost:8000/), the server created in one of the worker processes will handle it.

// The http.createServer() method defines a callback function that will be called every time a request is received. Inside this callback function, the server responds with "Hello World" and sends a response with a status code of 200.

// The listen() method starts the server and makes it listen for incoming requests on port 8000.

// Since there are multiple worker processes (one per CPU core), multiple requests can be handled concurrently. If a worker process is busy handling one request, another request can be handled simultaneously by another worker process.

// The master process (cluster.isMaster === true) forks the worker processes, and each worker process operates independently. If any worker process dies unexpectedly, the master process can spawn a new one to maintain the desired number of worker processes.

// So, in summary, when a request comes, it will be handled by one of the worker processes, and the other worker processes remain available to handle additional requests concurrently, making the application scalable and utilizing the available CPU resources efficiently.


// how work this code

// if (cluster.isMaster) {
//     console.log(`Master ${process.pid} is running`);
  
//     // Fork workers.
//     for (let i = 0; i < numCPUs; i++) {
//       cluster.fork();
//     }
  
//     cluster.on('exit', (worker, code, signal) => {
//       console.log(`Worker ${worker.process.pid} died`);
//     })



// explaim when cluster.isMaster this return false in this program


// In the provided program, cluster.isMaster returns false when the process is not the master process. The master process is responsible for spawning worker processes.

// The code executes on every instance of the application, both in the master process and in each of the worker processes. When cluster.isMaster is false, it means that the code is executing in one of the worker processes, not in the master process.

// Here's the breakdown of how cluster.isMaster evaluates to false:

// 1.Master Process: When you start the program, the first instance of the script to run is considered the master process. At this point, cluster.isMaster will be true. This is because the master process is responsible for creating and managing worker processes.

// 2.Worker Processes: After forking the worker processes using cluster.fork(), each worker process executes the same script independently. However, in each of these worker processes, cluster.isMaster will evaluate to false. This is because they are not the master process; they are the worker processes spawned by the master.

// In summary, cluster.isMaster returns false in the worker processes to distinguish them from the master process. This allows you to write code that behaves differently depending on whether it's running in the master or worker processes, enabling you to perform tasks specific to each process type.
