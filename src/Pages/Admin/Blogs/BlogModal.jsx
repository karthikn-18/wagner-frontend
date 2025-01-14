import React, { useEffect, useState } from 'react';
import { TextInput, Textarea } from 'flowbite-react';
import { Button, Modal } from 'flowbite-react';
import { useAddBlogs, useEditBlogs } from '../../../query/useMutation';

const BlogModal = ({ openModal, setOpenModal, selectedBlog, refetch }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        link: '',
        date: '',
        image: null,
    });
    const [error, setError] = useState('');
    const [selectedImageName, setSelectedImageName] = useState('');

    useEffect(() => {
        if (selectedBlog?._id) {
            setFormData({
                title: selectedBlog?.title || '',
                description: selectedBlog?.description || '',
                link: selectedBlog?.link || '',
                date: selectedBlog?.date ? new Date(selectedBlog.date).toISOString().split('T')[0] : '',
                image: selectedBlog?.image || null,
            });
            setSelectedImageName(selectedBlog?.image ? 'Current Image' : '');
        }
    }, [selectedBlog]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (['image/png', 'image/jpeg'].includes(file.type) && file.size <= 4 * 1024 * 1024) {
                setFormData((prev) => ({ ...prev, image: file }));
                setSelectedImageName(file.name);
                setError('');
            } else {
                setError('Only PNG/JPG images under 4MB are allowed.');
            }
        }
    };

    const handleRemoveImage = () => {
        setFormData((prev) => ({ ...prev, image: null }));
        setSelectedImageName('');
    };

    const { mutate } = useEditBlogs();
    const { mutate: addBlogsMutate } = useAddBlogs();

    const handleCloseFunction = () => {
        setFormData({
            title: '',
            description: '',
            link: '',
            date: '',
            image: null,
        });
        setError('');
        refetch();
        setOpenModal(false);
    };

    const handleSubmit = () => {
        const titleTrimmed = formData.title.trim();
        const descriptionTrimmed = formData.description.trim();
        
        if (!titleTrimmed || titleTrimmed.length < 5 || titleTrimmed.length > 100) {
            setError('Title is required and should be between 5 and 100 characters.');
            return;
        }
        if (!descriptionTrimmed || descriptionTrimmed.length < 20) {
            setError('Description is required and should be at least 20 characters long.');
            return;
        }

        const today = new Date().toISOString().split('T')[0];
        if (!formData.date || formData.date > today) {
            setError('Date is required and should not be in the future.');
            return;
        }

        setError(''); 

        if (selectedBlog?._id) {
            mutate({ data: formData, id: selectedBlog?._id, handleCloseFunction });
        } else {
            addBlogsMutate({ data: formData, handleCloseFunction });
        }
    };

    return (
        <Modal
            show={openModal}
            onClose={() => {
                setOpenModal(false);
                setFormData({
                    title: '',
                    description: '',
                    link: '',
                    date: '',
                    image: null,
                });
            }}
        >
            <Modal.Header className="p-3">{selectedBlog ? 'Edit Blog' : 'Add Blog'}</Modal.Header>
            <Modal.Body>
                <div className="space-y-4">
                    <div>
                        <TextInput
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Enter blog title"
                            label="Title"
                            required
                        />
                        {error.includes('Title') && <p className="text-sm text-red-500">{error}</p>}
                    </div>
                    <div>
                        <Textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Enter blog description"
                            label="Description"
                            required
                        />
                        {error.includes('Description') && <p className="text-sm text-red-500">{error}</p>}
                    </div>
                    <div>
                        <TextInput
                            name="link"
                            value={formData.link}
                            onChange={handleInputChange}
                            placeholder="Enter blog link (optional)"
                            label="Link"
                        />
                    </div>
                    <div>
                        <TextInput
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            placeholder="Enter publish date"
                            label="Date"
                            required
                        />
                        {error.includes('Date') && <p className="text-sm text-red-500">{error}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            {formData.image ? 'Edit Image (optional)' : 'Upload Image (optional)'}
                        </label>
                        {formData.image && typeof formData.image === 'string' && (
                            <div className="my-2">
                                <img
                                    src={formData.image}
                                    alt="Blog"
                                    className="w-24 h-24 object-cover rounded"
                                />
                                <button
                                    type="button"
                                    className="text-red-500 text-sm underline mt-2"
                                    onClick={handleRemoveImage}
                                >
                                    Remove Image
                                </button>
                            </div>
                        )}
                        <input
                            type="file"
                            accept=".png,.jpg"
                            onChange={handleImageChange}
                            className="mt-1"
                        />
                        {selectedImageName && (
                            <p className="text-sm text-gray-500 mt-1">Selected: {selectedImageName}</p>
                        )}
                    </div>
                    {error && !error.includes('Title') && !error.includes('Description') && !error.includes('Date') && (
                        <p className="text-sm text-red-500">{error}</p>
                    )}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button color="gray" onClick={handleSubmit}>
                    Save
                </Button>
                <Button
                    color="gray"
                    onClick={() => {
                        setOpenModal(false);
                        setFormData({
                            title: '',
                            description: '',
                            link: '',
                            date: '',
                            image: null,
                        });
                    }}
                >
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BlogModal;
