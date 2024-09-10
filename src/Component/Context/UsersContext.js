import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [followers, setFollowers] = useState(0);
    const [isFollowing, setIsFollowing] = useState();

    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);



    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle('');
        setImage(null);
        setImagePreview(null);
    };


    const handleFollowClick = () => {
        if (isFollowing) {
            setFollowers(followers - 1); 
        } else {
            setFollowers(followers + 1); 
        }
        setIsFollowing(!isFollowing);
    };








    return (
        <UserContext.Provider value={{ handleFollowClick, isFollowing, followers,title, handleTitleChange, handleImageUpload, handleSubmit, imagePreview  }}>
            {children}
        </UserContext.Provider>
    );
};

const useUserContext = () => {
    return useContext(UserContext);
};

export { UserProvider, UserContext, useUserContext };