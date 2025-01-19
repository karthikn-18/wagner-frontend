import React, { useEffect, useState } from 'react';
import { TextInput, Textarea } from 'flowbite-react';
import { Button, Modal } from 'flowbite-react';
import { useAddTestimonials, useEditTestimonials } from '../../../query/useMutation';
import { Loader2 } from 'lucide-react';

const TestimonialModal = ({ openModal, setOpenModal, selectedTestimonial, refetch, setSelectedTestimonial }) => {
    const [formData, setFormData] = useState({
        description: '',
        image: '',
        author: '',
        designation: '',
    });
    const [selectedImageName, setSelectedImageName] = useState('');
    const [error, setError] = useState('');


    useEffect(() => {
        if (selectedTestimonial?._id) {
            setFormData({
                description: selectedTestimonial?.description || '',
                image: selectedTestimonial?.image || '',
                author: selectedTestimonial?.author || '',
                designation: selectedTestimonial?.designation || '',
            });
        } else {
            setFormData({
                description: '',
                image: '',
                author: '',
                designation: '',
            });
        }
    }, [selectedTestimonial]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const { mutate, isPending: isAdding } = useAddTestimonials();
    const { mutate: editMutate, isPending: isEditing } = useEditTestimonials();


    const resetForm = () => {
        setFormData({
            description: '',
            image: '',
            author: '',
            designation: '',
        });

        setError('');
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


    const handleSubmit = () => {
        const { description, image, author, designation } = formData;

        if (!description || description.trim().length < 10) {
            setError('Description is required and must be at least 10 characters.');
            return;
        }

        if (!author || author.trim().length < 3 || /\d/.test(author)) {
            setError('Author name must be at least 3 characters and should not contain numbers.');
            return;
        }

        if (!designation || designation.trim().length < 2) {
            setError('Designation must be at least 3 characters.');
            return;
        }

        setError('');

        const handleCloseFunction = () => {
            resetForm();
            setSelectedTestimonial(null);
            refetch();
            setOpenModal(false);
        };

        const formDataValue = new FormData();
        formDataValue.append('description', description);
        formDataValue.append('image', image);
        formDataValue.append('author', author);
        formDataValue.append('designation', designation);

        if (selectedTestimonial?._id) {
            editMutate({ data: formDataValue, id: selectedTestimonial?._id, handleCloseFunction });
        } else {
            mutate({ data: formDataValue, handleCloseFunction });
        }
    };



    return (
        <Modal
            show={openModal}
            onClose={() => {
                resetForm();
                setSelectedTestimonial(null);
                setOpenModal(false);
            }}
        >
            <Modal.Header className="p-3">
                {selectedTestimonial ? 'Edit Testimonial' : 'Add Testimonial'}
            </Modal.Header>
            <Modal.Body>
                <div className="space-y-4">
                    <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Enter testimonial description"
                        label="Description"
                        required
                    />

                    <TextInput
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                        placeholder="Enter author's name"
                        label="Author"
                        required
                    />
                    <TextInput
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        placeholder="Enter designation"
                        label="Designation"
                        required
                    />
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

                    {error && <p className="text-sm text-red-500">{error}</p>}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    color="gray"
                    onClick={handleSubmit}
                    disabled={selectedTestimonial?._id ? isEditing : isAdding}
                >
                    {(selectedTestimonial?._id ? isEditing : isAdding) && <Loader2 size={20} className="animate-spin mr-2" />}
                    Save
                </Button>
                <Button
                    color="gray"
                    onClick={() => {
                        resetForm();
                        setSelectedTestimonial(null);
                        setOpenModal(false);
                    }}
                >
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TestimonialModal;
