import { Databases, Client, Query, ID } from "appwrite";
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const API_ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;
const API_KEY = import.meta.env.VITE_APPWRITE_PROJECT_API_KEY;

const clint = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject(PROJECT_ID); // Your project ID
const database = new Databases(clint);

export const updateSearchCount = async (searchTerm, movie) => {
  console.log(DATABASE_ID, COLLECTION_ID, PROJECT_ID);
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal("searchTerm", searchTerm),
    ]);
    if (result.documents.length > 0) {
      const doc = result.documents[0];
      await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
        count: doc.count + 1,
      });
    } else {
      await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        searchTerm,
        count: 1,
        movie_id: movie?.id || null,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      });
    }
    //console.log("Search count updated:", result); // Optional: Log the result for debugging
  } catch (error) {
    console.error("Error updating search count:", error);
  }
};
export const getTrendingMovies = async () => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.orderDesc("count"),
      Query.limit(5),
    ]);
    return result.documents;
  } catch (error) {
    console.error("Error fetching trending search terms:", error);
  } 
}