import axios from "axios";

const KEY = "AIzaSyCHCBzh4FUUViR8GEdxH7zW6f0-NC4GjGg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
