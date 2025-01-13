import React, { useEffect, useState } from 'react';
import { TextInput, Button, Modal } from 'flowbite-react';
import { useAddCategory, useAddIndustry, useEditCategory, useEditIndustry } from '../../../query/useMutation';

const CategoryModal = ({ openModal, setOpenModal, onSave, selectedValue, refetch }) => {
    const [formData, setFormData] = useState({ name: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        if (selectedValue?._id) {
            setFormData({ name: selectedValue?.name || '' });
        }
    }, [selectedValue]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const { mutate: editCategoryMutate } = useEditCategory();
    const { mutate: addCategoryMutate } = useAddCategory();

    const handleCloseFunction = () => {
        setFormData({ name: '' });
        setError('');
        setOpenModal(false);
        refetch();
    };

    const handleSubmit = () => {
        if (!formData.name) {
            setError('Name is required.');
            return;
        }

        if (selectedValue?._id) {
            editCategoryMutate({ data: formData, id: selectedValue?._id, handleCloseFunction });
        } else {
            addCategoryMutate({ data: formData, handleCloseFunction });
        }
    };

    return (
        <Modal show={openModal} onClose={handleCloseFunction}>
            <Modal.Header className='p-3'>
                {selectedValue ? 'Edit Industry' : 'Add Industry'}
            </Modal.Header>
            <Modal.Body>
                <div className="space-y-4">
                    <TextInput
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter Industry title"
                        label="Title"
                        required
                    />
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button color="gray" onClick={handleSubmit}>
                    Save
                </Button>
                <Button color="gray" onClick={handleCloseFunction}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CategoryModal;
