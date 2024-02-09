const fetchUserData = async () => {
  try {
      const response = await fetch("https://dummyjson.com/users");

      if (!response.ok) {
          throw new Error(`An error has occurred: ${response.status}`);
      }

      const data = await response.json();
      processUserData(data.users); // Pass the users array to processUserData
  } catch (error) {
      console.error("Error:", error.message);
  }
};

const processUserData = (users) => {
  try {
      // Check if users is an array


      // Filter out users who have "male" as gender
      const maleUsers = users.filter(user => user.gender === "male");

      // Map the remaining male users to the required format
      const formattedUsers = maleUsers.map(user => `Name: ${user.firstName} ${user.lastName}, Age: ${user.age}`);

      // Log the processed male users
      console.log("Processed Male Users:");
      formattedUsers.forEach(user => console.log( ${user}));

      // Summarize the age of male users
      const totalAge = summarizeAge(maleUsers);

      // Log the total age
      console.log(`Total AVerage Age of Male Users: ${totalAge}`);
  } catch (error) {
      console.error("Error:", error.message);
  }
};

const summarizeAge = (users) => {
  // Calculate the total age of male users using reduce
  let sum= users.reduce((totalAge, user) => totalAge + user.age, 0);
  const avg  = sum / users.length;
   return Math.round(avg);
};