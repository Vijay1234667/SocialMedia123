import React, { useState } from 'react';

const AddPost = () => {
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
        if (!title || !image) {
            alert('Please add a title and upload an image');
            return;
        }
        console.log('Title:', title);
        console.log('Image:', image);

        setTitle('');
        setImage(null);
        setImagePreview(null);
    };

    return (
        <div>
            <h2>Add Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="Enter post title"
                    />
                </div>
                <div>
                    <label>Upload Image:</label>
                    <input type="file" onChange={handleImageUpload} />
                </div>
                {imagePreview && (
                    <div>
                        <img src={imagePreview} alt="Preview" style={{ width: '200px', marginTop: '10px' }} />
                    </div>
                )}
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
};

export default AddPost;