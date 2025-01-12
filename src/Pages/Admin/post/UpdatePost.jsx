import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useFetchBlogByIdQuery, useUpdateBlogMutation } from '../../../redux/features/blogs/blogsApi';
import ReactQuill from 'react-quill'; // Install with `npm install react-quill`
import 'react-quill/dist/quill.snow.css'; // Quill styling

const UpdatePost = () => {
  const { id } = useParams(); // Blog ID from URL
  const [title, setTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [content, setContent] = useState(''); // For Quill content
  const [coverImg, setCoverImg] = useState(null);
  const [existingCoverImg, setExistingCoverImg] = useState('');
  const [message, setMessage] = useState('');
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const { data: blog, isLoading: isFetching } = useFetchBlogByIdQuery(id);
  const [updateBlog, { isLoading }] = useUpdateBlogMutation();

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setMetaDescription(blog.description);
      setContent(blog.content); // Load content from the API
      setExistingCoverImg(blog.coverImg);
    }
  }, [blog]);

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setCoverImg(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !metaDescription || !content) {
      setMessage('Title, Meta Description, and Content are required!');
      return;
    }

    const formData = new FormData();
    formData.append('id', id); // Include ID
    formData.append('title', title);
    formData.append('content', content);
    formData.append('description', metaDescription);
    if (coverImg) {
      formData.append('coverImg', coverImg); // Ensure correct field name
    }

    try {
      await updateBlog(formData).unwrap();
      alert('Blog updated successfully!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating blog:', error);
      setMessage('Error updating the blog. Please try again.');
    }
  };

  if (isFetching) return <p>Loading...</p>;

  return (
    <div className="edit-blog-form-sec dashboard-forms">
      <div className="head">
        <h2>Edit Blog</h2>
        <Link to="/dashboard/manage-post" className="blog-page-switch">
          Manage All Posts
        </Link>
      </div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-content">
          <label htmlFor="title">Blog Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Blog Title"
          />
        </div>
        <div className="row description-section">
          <div className="col-lg-6">
            <h2>Content Section</h2>
            <p>Edit your blog content below</p>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              placeholder="Write your blog content here..."
              modules={{
                toolbar: [
                  ['bold', 'italic', 'underline', 'strike'],
                  ['blockquote', 'code-block'],
                  [{ list: 'ordered' }, { list: 'bullet' }],
                  [{ header: [1, 2, 3, false] }],
                  ['link', 'image', 'video'],
                  ['clean'],
                ],
              }}
            />
          </div>
          <div className="col-lg-6">
            <div className="right-contents">
              <h2>Blog Cover</h2>
              <label htmlFor="blogCover">Cover Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleCoverImageChange}
              />
              {coverImg ? (
                <div className="image-preview">
                  <p>New Preview:</p>
                  <img
                    src={URL.createObjectURL(coverImg)}
                    alt="New Cover Preview"
                    style={{
                      width: '100%',
                      maxHeight: '200px',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              ) : (
                existingCoverImg && (
                  <div className="image-preview">
                    <p>Current Image:</p>
                    <img
                      src={`http://localhost:5000/${existingCoverImg}?t=${new Date().getTime()}`}
                      alt="Current Cover"
                      style={{
                        width: '100%',
                        maxHeight: '200px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                )
              )}
              <label htmlFor="metaDescription">Meta Description</label>
              <textarea
                id="metaDescription"
                cols={4}
                rows={4}
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                placeholder="Write Your Blog Meta Descriptions"
              />
            </div>
          </div>
        </div>
        {message && <p>{message}</p>}
        <button type="submit" disabled={isLoading}>
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default UpdatePost;
