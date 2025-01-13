import React, { useEffect, useState } from 'react';
import { TextInput, Button, Modal } from 'flowbite-react';
import { useAddApplication, useEditApplication } from '../../../query/useMutation';

const ApplicationModal = ({ openModal, setOpenModal, onSave, selectedValue, refetch }) => {
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

    const { mutate: editApplicationMutate } = useEditApplication();
    const { mutate: addApplicationMutate } = useAddApplication();

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
            editApplicationMutate({ data: formData, id: selectedValue?._id, handleCloseFunction });
        } else {
            addApplicationMutate({ data: formData, handleCloseFunction });
        }
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

export default ApplicationModal;
