import React, { useEffect, useState } from 'react';
import { TextInput, Button, Modal } from 'flowbite-react';
import { useAddCategory, useAddIndustry, useEditCategory, useEditIndustry } from '../../../query/useMutation';

const CategoryModal = ({ openModal, setOpenModal, onSave, selectedValue, refetch }) => {
    const [formData, setFormData] = useState({ name: '', image: null });
    const [error, setError] = useState('');
    const [selectedImageName, setSelectedImageName] = useState('');

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
        setFormData({ name: '', image: null });
        setError('');
        setSelectedImageName('');
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

    return (
        <Modal show={openModal} onClose={handleCloseFunction}>
            <Modal.Header className='p-3'>
                {selectedValue ? 'Edit Category' : 'Add Category'}
            </Modal.Header>
            <Modal.Body>
                <div className="space-y-4">
                    <TextInput
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter Category title"
                        label="Title"
                        required
                    />
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                </div>
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
