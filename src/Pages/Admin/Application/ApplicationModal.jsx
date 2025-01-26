import React, { useEffect, useState } from 'react';
import { TextInput, Button, Modal } from 'flowbite-react';
import { useAddApplication, useEditApplication } from '../../../query/useMutation';
import { Loader2 } from 'lucide-react';

const ApplicationModal = ({ openModal, setOpenModal, onSave, selectedValue, refetch }) => {
    const [formData, setFormData] = useState({ name: '', image: null });
    const [error, setError] = useState('');
    const [selectedImageName, setSelectedImageName] = useState('');


    useEffect(() => {
        if (selectedValue?._id) {
            setFormData({ name: selectedValue?.name || '', image: selectedValue?.image || null });
        }
    }, [selectedValue]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const { mutate: editApplicationMutate, isPending: isEditing } = useEditApplication();
    const { mutate: addApplicationMutate , isPending: isAdding} = useAddApplication();

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
            editApplicationMutate({ data: formData, id: selectedValue?._id, handleCloseFunction });
        } else {
            addApplicationMutate({ data: formData, handleCloseFunction });
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
        e.target.value = '';
    };

    const handleRemoveImage = () => {
        setFormData((prev) => ({ ...prev, image: null }));
        setSelectedImageName('');
    };


    return (
        <Modal show={openModal} onClose={handleCloseFunction}>
            <Modal.Header className='p-3'>
                {selectedValue ? 'Edit Application' : 'Add Application'}
            </Modal.Header>
            <Modal.Body>
                <div className="space-y-4">
                    <TextInput
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter application title"
                        label="Title"
                        required
                    />
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                </div>
                {formData.image && typeof formData.image === 'string' && (
                    <div className="my-2 pt-4">
                        <img
                            src={formData.image}
                            alt="Category"
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
                <Button
                    color="gray"
                    onClick={handleSubmit}
                    disabled={selectedValue?._id ? isEditing : isAdding}
                >
                    {(selectedValue?._id ? isEditing : isAdding) && <Loader2 size={20} className="animate-spin mr-2" />}
                    Save
                </Button>
                <Button color="gray" onClick={handleCloseFunction}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ApplicationModal;
