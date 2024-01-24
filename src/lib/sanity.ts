// lib/sanity.ts
import { createClient, ClientConfig, SanityClient } from '@sanity/client';

const clientConfig: ClientConfig = {
  projectId: 'your-project-id',
  dataset: 'your-dataset',
  // ... other sanity client configurations
};

const client: SanityClient = createClient(clientConfig);

export const createPostInSanity = async (output: any) => {
  // Replace YourOutputType with the actual type of your output

  // Define the data structure for the new post based on your Sanity schema
  const postData = {
    _type: 'post', // Adjust this based on your Sanity schema
    // Add other fields based on your Sanity schema
    // ...
    // Assuming output contains relevant data
    // Adjust this based on the structure of your output data
    title: output.title,
    content: output.content,
  };

  // Create a new post in Sanity
  await client.create(postData);

  // You may need to handle the response or do additional processing here
};
