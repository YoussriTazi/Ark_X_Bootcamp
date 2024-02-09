// This line defines a function called fetchUserData. It's a special kind of function that can pause and resume its execution, which is why it has the keyword "async" before it.
const fetchUserData = async () => {
  try {
      // This line makes a request to a web address (URL) to get some data. The "await" keyword means the code will wait for the request to finish before moving on.
      const response = await fetch("https://dummyjson.com/users");

      // This checks if the response from the website is okay. If it's not okay, it means something went wrong.
      if (!response.ok) {
          // If there's an error, this line creates an error message with some information about what went wrong.
          throw new Error(`An error has occurred: ${response.status}`);
      }

      // If everything is okay with the response, this line converts the data that came back from the website into a format that JavaScript can understand (JSON).
      const data = await response.json();
      
      // This line calls another function called processUserData and gives it the user data that we got from the website.
      processUserData(data.users); 

  } catch (error) {
      // If there was an error anywhere in the "try" block, this code will run. It prints out the error message to the console so the programmer can see what went wrong.
      console.error("Error:", error.message);
  }
};