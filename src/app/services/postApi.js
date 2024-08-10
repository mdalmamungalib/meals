export const getPost = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  
      if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error; // rethrow the error to handle it further up the call stack if needed
    }
  };
  