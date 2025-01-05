import React, { useEffect, useState } from 'react';
import { TextInput, Textarea } from 'flowbite-react';
import { Button, Modal } from 'flowbite-react';
import { useAddTestimonials, useEditTestimonials } from '../../../query/useMutation';

const TestimonialModal = ({ openModal, setOpenModal, selectedTestimonial, refetch }) => {
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
        }
    }, [selectedTestimonial]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const { mutate } = useAddTestimonials();
    const { mutate: editMutate } = useEditTestimonials();

    const handleSubmit = () => {
        const { description, image, author, designation } = formData;

        if (!description || !image || !author || !designation) {
            setError('All fields are required.');
            return;
        }

        const imageUriPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
        if (!imageUriPattern.test(image)) {
            setError('Image must be a valid URI.');
            return;
        }

        const handleCloseFunction = () => {
            setFormData({
               
                description: '',
                image: '',
                author: '',
                designation: '',
            });
            setError('');
            refetch();
            setOpenModal(false);
        };

        if (selectedTestimonial?._id) {
            editMutate({ data: formData, id: selectedTestimonial?._id, handleCloseFunction });
        } else {
            mutate({ data: formData, handleCloseFunction });
        }
    };

    return (
        <Modal show={openModal} onClose={() => {
            setOpenModal(false), setFormData({
              
                description: '',
                image: '',
                author: '',
                designation: '',
            });
        }}>
            <Modal.Header className='p-3'>{selectedTestimonial ? 'Edit Testimonial' : 'Add Testimonial'}</Modal.Header>
            <Modal.Body>
                <div className="space-y-4">
                    {/* <TextInput
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Enter title"
                        label="Title"
                        required
                    /> */}
                    <Textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Enter description"
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
                <Button color="gray" onClick={handleSubmit}>Save</Button>
                <Button color="gray" onClick={() => {
                    setOpenModal(false), setFormData({
                      
                        description: '',
                        image: '',
                        author: '',
                        designation: '',
                    });
                }}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TestimonialModal;
