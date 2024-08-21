import { Button, Modal, Spinner, TextInput } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { getDetails, getPosts, getStories } from "../states/UserState";
import { Toaster, toast } from "react-hot-toast";

export default function SearchBar() {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [stories, setStories] = useState(null);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const profileRef = useRef(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStories(null);
    setPosts([]);
    setUser(null)
    setError(null);

    Promise.all([
      getDetails(userName, setUser, setLoading, setError),
      getStories(userName, setStories, setLoading, setError),
      getPosts(userName, setPosts, setLoading, setError),
    ]).finally(() => setLoading(false));
  };

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  useEffect(() => {
    if (user) {
      profileRef.current?.scrollIntoView({ behavior: 'smooth' });
      if (user.detail === 'Not found') {
        toast.error('User not found');
      }
    }
  }, [user]);

  useEffect(() => {
    if (stories && stories.detail === 'Not found') {
      toast.error('User not found');
    }
  }, [stories, posts, user]);

  const renderStories = () => {
    if (loading) return <Spinner color="success" />;
    if (!stories) return "Loading Stories...";
    if (stories.data.count === 0) return "No Story Found";

    return stories.data.items.map((story, index) => (
      story.video_url ? 
        <video
          key={index}
          className="h-24 w-20 rounded border border-teal-600 object-cover cursor-pointer"
          src={story.video_url}
          controls
          alt={`Story ${index + 1}`}
        ></video> : 
        <img
          key={index}
          className="h-24 w-20 rounded border border-teal-600 object-cover cursor-pointer"
          src={story.thumbnail_url}
          onClick={() => setSelectedStory(story.thumbnail_url)}
          alt={`Story ${index + 1}`}
        />
    ));
  };

  const renderPosts = () => {
    if (loading) return <Spinner color="success" />;
    if (user.data.media_count !== 0 && posts.length === 0) return 'No Posts to show.';

    return posts.map((post, index) => (
      post.video_url ? 
        <video
          key={index}
          className="h-80 w-80 rounded border border-teal-600 object-cover cursor-pointer"
          src={post.video_url}
          controls
          alt={`Post ${index + 1}`}
        ></video> : 
        <img
          key={index}
          className="h-80 w-80 rounded border border-teal-600 object-cover cursor-pointer"
          src={post.thumbnail_url}
          onClick={() => setSelectedStory(post.thumbnail_url)}
          alt={`Post ${index + 1}`}
        />
    ));
  };

  return (
    <>
      <Toaster />
      <div className="relative h-[90vh] w-full mt-1">
        <img
          src="/SearchBG.jpg"
          className="object-cover h-full w-full"
          alt="Background"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <form onSubmit={handleOnSubmit} className="flex">
            <TextInput
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              rightIcon={IoIosSearch}
              required
              placeholder="Search by Instagram username here..."
              className="w-[40vw] self-center"
            />
            <Button type="submit" disabled={loading} className="font-bold bg-transparent" color='green' outline>
              {loading ? <Spinner color='success' /> : 'Find'}
            </Button>
          </form>
        </div>
      </div>

      {user && user.detail !== 'Not found' && (
        <div ref={profileRef} className="flex flex-col items-center p-4 shadow-lg rounded-lg mt-10">
          <div className="flex gap-4 items-center">
            <img
              src={user.data.hd_profile_pic_url_info.url}
              alt="User"
              className="rounded-full h-24 w-24 border border-teal-600 object-cover"
            />
            <h2 className="text-xl font-bold">{user.data.full_name}</h2>
          </div>
          <div className="flex gap-6 mt-4">
            <p className="text-lg font-semibold hover:underline">
              {user.data.media_count} Posts
            </p>
            <p className="text-lg font-semibold hover:underline">
              {user.data.follower_count} Followers
            </p>
            <p className="text-lg font-semibold hover:underline">
              {user.data.following_count} Following
            </p>
          </div>
          <div className="mt-10">
            <h2 className="font-bold text-lg">Stories</h2>
            <div className="flex gap-3">
              {renderStories()}
            </div>
          </div>
          <div className="mx-20 my-10">
            <h2 className="font-bold text-2xl mb-3 text-center">Posts</h2>
            <div className="flex flex-wrap gap-1 justify-evenly">
              {renderPosts()}
            </div>
          </div>
        </div>
      )}

      <Modal
        show={selectedStory !== null}
        onClose={() => setSelectedStory(null)}
      >
        <Modal.Body>
          <div className="flex justify-center items-center h-full">
            <img
              className="w-[30vw] h-[80vh] object-cover"
              src={selectedStory}
              alt="Full Screen Story"
            />
          </div>
          <div className="flex items-end justify-end mt-2">
            <Button
              className="font-bold" color='success'
              outline
              onClick={() => setSelectedStory(null)}
            >
              Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
