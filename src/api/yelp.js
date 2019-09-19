import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ehGrjiIY4oSHUjUOPxd5q4OCsT7peQv8hqrVy1ALqg0QdCbZHOn80spYbT0LFYpjVbk-wZ8SftJffptQZj6JZVXeLyJ50pWorIlQHPgawGepO1LpcfD7ibBzQTaDXXYx'
    }
});
