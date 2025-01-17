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
    const [error, setError] = useState('');


    useEffect(() => {
        if (selectedTestimonial?._id) {
            setFormData({
                description: selectedTestimonial?.description || '',
                image: selectedTestimonial?.image || '',
                author: selectedTestimonial?.author || '',
                designation: selectedTestimonial?.designation || '',
            });
        }else{
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

    const { mutate, isLoading: isAdding } = useAddTestimonials();
    const { mutate: editMutate, isLoading: isEditing } = useEditTestimonials();


    const resetForm = () => {
        setFormData({
            description: '',
            image: '',
            author: '',
            designation: '',
        });

        setError('');
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

        if (selectedTestimonial?._id) {
            editMutate({ data: formData, id: selectedTestimonial?._id, handleCloseFunction });
        } else {
            mutate({ data: formData, handleCloseFunction });
        }
    };

    const isLoading = isAdding || isEditing;

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
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        placeholder="Enter image URL"
                        label="Image URL"
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
                    {error && <p className="text-sm text-red-500">{error}</p>}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    color="gray"
                    onClick={handleSubmit}
                    disabled={isLoading}
                >
                    {isLoading && <Loader2 size={20} className="animate-spin mr-2" />}
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
