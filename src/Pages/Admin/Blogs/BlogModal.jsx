import React, { useEffect, useState } from 'react';
import { TextInput, Textarea } from 'flowbite-react';
import { Button, Modal } from 'flowbite-react';
import { useAddBlogs, useEditBlogs } from '../../../query/useMutation';
import { Plus, X, Loader2 } from 'lucide-react'; // Import the loader icon

const BlogModal = ({ openModal, setOpenModal, selectedBlog, refetch, setSelectedBlog }) => {
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        image: null,
    });
    const [description, setDescription] = useState(['']);
    const [error, setError] = useState('');
    const [selectedImageName, setSelectedImageName] = useState('');

    useEffect(() => {
        if (selectedBlog?._id) {
            setFormData({
                title: selectedBlog?.title || '',
                description: selectedBlog?.description || '',
                date: selectedBlog?.date ? new Date(selectedBlog.date).toISOString().split('T')[0] : '',
                image: selectedBlog?.image || null,
            });
            setDescription(selectedBlog?.description || ['']);
            setSelectedImageName(selectedBlog?.image ? 'Current Image' : '');
        } else {
            setFormData({
                title: '',
                description: '',
                date: '',
                image: null,
            });
            setDescription(['']);
            setSelectedImageName('');
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
        e.target.value = '';
    };

    const handleRemoveImage = () => {
        setFormData((prev) => ({ ...prev, image: null }));
        setSelectedImageName('');
    };

    const { mutate, isPending: isEditing } = useEditBlogs();
    const { mutate: addBlogsMutate, isPending: isAdding } = useAddBlogs();

    const handleCloseFunction = () => {
        setFormData({
            title: '',
            description: '',
            link: '',
            date: '',
            image: null,
        });
        setDescription(['']);
        setError('');
        refetch();
        setSelectedBlog('');
        setOpenModal(false);
    };

    const handleSubmit = () => {
        const titleTrimmed = formData.title.trim();
        const descriptionTrimmed = description.join('').trim();

        let formDataValue = new FormData();


        if (!titleTrimmed || titleTrimmed.length < 5 || titleTrimmed.length > 100) {
            setError('Title is required and should be between 5 and 100 characters.');
            return;
        }

        if (!description || description.every((desc) => !desc.trim()) || descriptionTrimmed.length < 20) {
            setError('Description is required and should be at least 20 characters long.');
            return;
        }

        const today = new Date().toISOString().split('T')[0];
        if (!formData.date || formData.date > today) {
            setError('Date is required and should not be in the future.');
            return;
        }

        setError('');

        // const payload = { ...formData, description };
        formDataValue.append('title', formData.title);
        formDataValue.append('description', description);
        formDataValue.append('date', formData.date);
        formDataValue.append('image', formData.image);

        if (selectedBlog?._id) {
            mutate({ data: formDataValue, id: selectedBlog?._id, handleCloseFunction });
        } else {
            addBlogsMutate({ data: formDataValue, handleCloseFunction });
        }
    };

    const handleDescriptionChange = (index, e) => {
        const value = [...description];
        value[index] = e.target.value;
        setDescription(value);
    };

    return (
        <Modal
            show={openModal}
            onClose={() => {
                setOpenModal(false);
                setDescription(['']);
                setSelectedBlog('');
                setFormData({
                    title: '',
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
                        {description.map((item, index) => (
                            <div className="flex space-x-2 mb-2" key={index}>
                                <Textarea
                                    name="description"
                                    value={item}
                                    onChange={(e) => handleDescriptionChange(index, e)}
                                    placeholder="Enter blog description"
                                    label="Description"
                                    required
                                />
                                {error.includes('Description') && <p className="text-sm text-red-500">{error}</p>}
                                {description.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => setDescription(prev => prev.filter((_, i) => i !== index))}
                                        className="p-2 text-red-500 hover:bg-red-50 rounded-md h-fit"
                                    >
                                        <X size={20} />
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => setDescription(prev => [...prev, ''])}
                            className="inline-flex items-center text-sm text-blue-500 hover:text-blue-600"
                        >
                            <Plus size={16} className="mr-1" /> Add More Description
                        </button>
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
                <Button
                    color="gray"
                    onClick={handleSubmit}
                    disabled={selectedBlog?._id ? isEditing : isAdding}
                >
                    {(selectedBlog?._id ? isEditing : isAdding) ? <Loader2 size={20} className="animate-spin mr-2" /> : null}
                    Save
                </Button>
                <Button
                    color="gray"
                    onClick={() => {
                        setOpenModal(false);
                        setDescription(['']);
                        setFormData({
                            title: '',
                            description: '',
                            link: '',
                            date: '',
                            image: null,
                        });
                        setSelectedBlog('');
                    }}
                >
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BlogModal;
