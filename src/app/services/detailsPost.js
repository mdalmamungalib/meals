export const getDetailPost = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch post with ID ${id}: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching post details:", error);
      throw error; // rethrow the error to handle it further up the call stack if needed
    }
  };
  