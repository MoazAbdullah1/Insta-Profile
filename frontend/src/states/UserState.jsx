export const getDetails = async (userName, setUser, setLoading, setError) => {
    try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/details/get/${userName}`, {
            method: "GET"
        });

        const data = await response.json();

        if (!response.ok) {
            setError(data.message || 'Something went wrong!');
        }

        setUser(data);
    } catch (error) {
        setError(error.message || 'Failed to fetch user details');
    } finally {
        setLoading(false);
    }
};

export const getStories = async (userName, setStories, setLoading, setError) => {
    try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/stories/get/${userName}`, {
            method: "GET"
        });

        const data = await response.json();

        if (response.ok  && data.detail !== "Not found") {
            setStories(data);
        }
    } catch (error) {
        setError(error.message || 'Failed to fetch user details');
    } finally {
        setLoading(false);
    }
};

export const getPosts = async (userName, setPosts, setLoading, setError) => {
    try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/posts/get/${userName}`, {
            method: "GET"
        });

        const data = await response.json();

        if (response.ok && data.detail !== "Private account" && data.detail !== "Not found") {
            setPosts(data.data.items);
        }
    } catch (error) {
        setError(error.message || 'Failed to fetch user details');
    } finally {
        setLoading(false);
    }
};