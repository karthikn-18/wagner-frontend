import React, { useEffect, useState } from 'react';
import { TextInput, Button, Modal } from 'flowbite-react';
import { useAddIndustry, useEditIndustry } from '../../../query/useMutation';
import { Loader2 } from 'lucide-react';

const IndustriesModal = ({ openModal, setOpenModal, onSave, selectedIndustry, refetch }) => {
    const [formData, setFormData] = useState({ name: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        if (selectedIndustry?._id) {
            setFormData({ name: selectedIndustry?.name || '' });
        }
    }, [selectedIndustry]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const { mutate: editIndustryMutate, isLoading: isEditing } = useEditIndustry();
    const { mutate: addIndustryMutate, isLoading: isAdding } = useAddIndustry();

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

        if (selectedIndustry?._id) {
            editIndustryMutate({ data: formData, id: selectedIndustry?._id, handleCloseFunction });
        } else {
            addIndustryMutate({ data: formData, handleCloseFunction });
        }
    };

    const isLoading = isAdding || isEditing;

    return (
        <Modal show={openModal} onClose={handleCloseFunction}>
            <Modal.Header className='p-3'>
                {selectedIndustry ? 'Edit Industry' : 'Add Industry'}
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
                <Button color="gray" onClick={handleSubmit} disabled={isLoading}>
                    {isLoading && <Loader2 size={20} className="animate-spin mr-2" />}
                    Save
                </Button>
                <Button color="gray" onClick={handleCloseFunction}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default IndustriesModal;
