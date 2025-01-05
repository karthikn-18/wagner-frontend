import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import EditorJS from '@editorjs/editorjs';
import Quote from '@editorjs/quote';
import EditorjsList from '@editorjs/list';
import Checklist from '@editorjs/checklist';
import Header from '@editorjs/header';
import { Link, useNavigate } from 'react-router-dom';
import { usePostBlogMutation } from '../../../redux/features/blogs/blogsApi';

const AddPost = () => {
  const editorRef = useRef(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState(''); // Store content from editor
  const [coverImg, setCoverImg] = useState(null);
  const [metaDescription, setMetaDescription] = useState('');
  const [message, setMessage] = useState('');

  const [postBlog, { isLoading }] = usePostBlogMutation();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editorjs',
      onReady: () => {
        editorRef.current = editor;
      },
      autofocus: true,
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
        },
        list: {
          class: EditorjsList,
          inlineToolbar: true,
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: 'CMD+SHIFT+O',
        },
      },
    });

    return () => {
      editor.destroy();
      editorRef.current = null;
    };
  }, []);

  const navigate = useNavigate();

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setCoverImg(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save content from EditorJS
      const editorContent = await editorRef.current.save();

      if (!title || !coverImg || !metaDescription) {
        setMessage('All fields are required!');
        return;
      }

      const formData = new FormData();
      formData.append('title', title);
      formData.append('coverImg', coverImg);
      formData.append('content', JSON.stringify(editorContent)); // Save editor content as JSON
      formData.append('description', metaDescription);
      formData.append('author', user._id); // Add the author (user ID) to the formData

      const response = await postBlog(formData).unwrap();
      alert('Blog is posted successfully');
      navigate('/dashboard');

      setMessage('Post submitted successfully!');
      setTitle('');
      setCoverImg(null);
      setMetaDescription('');
      editorRef.current.clear();
    } catch (error) {
      setMessage('There was an error submitting the post.');
    }
  };

  return (
    <div className="add-blog-form-sec dashboard-forms">
      <div className="head">
        <h2>Create a New Blog</h2>
        <Link to="/dashboard/manage-post" className="blog-page-switch">
          Manage All Posts
        </Link>
      </div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-content">
          <label htmlFor="">Blog Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Blog Title"
          />
        </div>
        <div className="row description-section">
          <div className="col-lg-6">
            <h2>Content Section</h2>
            <p>Write your post below here</p>
            <div className="description" id="editorjs"></div>
          </div>

          <div className="col-lg-6">
            <div className="right-contents">
              <h2>Choose Blog Format</h2>
              <label htmlFor="blogCover">Blog Cover</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleCoverImageChange}
              />
              {coverImg && (
                <div className="image-preview">
                  <p>Preview:</p>
                  <img
                    src={URL.createObjectURL(coverImg)}
                    alt="Cover Preview"
                    style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
                  />
                </div>
              )}
              <label htmlFor="">Meta Description:</label>
              <textarea
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
          Add New Blog
        </button>
      </form>
    </div>
  );
};

export default AddPost;
