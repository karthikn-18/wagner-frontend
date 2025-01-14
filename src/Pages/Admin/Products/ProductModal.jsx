
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import {  useDeleteProduct } from "../../../query/useMutation";

export function ProductDelete({ openModal, setOpenModal, refetch, selectedProduct }) {
    // const [openModal, setOpenModal] = useState(true);

    const handleCloseFunction = () => {
        setOpenModal(false)
        refetch()
    }
    const { mutate } = useDeleteProduct()
    const handleDelete = () => {
        console.log(selectedProduct?._id);
        mutate({ id: selectedProduct?._id, handleCloseFunction })
    }

    return (
        <>
            {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this Product?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={() => handleDelete()}>
                                {"Yes, I'm sure"}
                            </Button>
                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
