import express from 'express';
import cors from 'cors'
import followers from './routes/followers.js'
import following from './routes/following.js'
import posts from './routes/posts.js'
import details from './routes/details.js'
import stories from './routes/stories.js'

const app = express();
app.use(cors())
const port = 5000;

app.use(express.json())
app.use("/followers", followers)
app.use("/following", following)
app.use("/posts", posts)
app.use("/details", details)
app.use("/stories", stories)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
