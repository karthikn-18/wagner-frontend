

import React, { useEffect, useState } from 'react';
import { Plus, X, Loader } from 'lucide-react';
// import Multiselect from 'multiselect-react-dropdown';
import Multiselect from 'react-select'
import { Label } from 'flowbite-react';
import { useApplicationGetQuery, useCategoryGetQuery, useIndustriesGetQuery, useProductGetSingleIdQuery } from '../../../query/useQuery';
import { useAddProduct, useEditProduct } from '../../../query/useMutation';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const AddProductForm = () => {
    const { data: categories } = useCategoryGetQuery();
    const { data: industriesValue } = useIndustriesGetQuery();
    const { data: applicationsValue } = useApplicationGetQuery();

    const { id } = useParams();

    let mutate;
    let SingleProduct;

    if (id) {
        const { mutate: singleProduct } = useEditProduct();
        mutate = singleProduct;
        const { data: product } = useProductGetSingleIdQuery(id);
        SingleProduct = product?.data?.data;
    } else {
        const { mutate: addProduct } = useAddProduct();
        mutate = addProduct;
    }

    console.log(SingleProduct, "SingleProduct")


    useEffect(() => {
        if (SingleProduct) {
            setFormData({
                name: SingleProduct.name || '',
                description: SingleProduct.description || '',
                price: SingleProduct.price || '',
                category: SingleProduct.category?._id || '',
                availableSize: SingleProduct.availableSizes || '',
                status: SingleProduct.status || 'active',
                bestSeller: SingleProduct.bestSeller || false,
            });

            setSelectedIndustries(SingleProduct.industries?.map(industry => ({ label: industry.name, value: industry._id })) || []);
            setSelectedApplications(SingleProduct.applications?.map(app => ({ label: app.name, value: app._id })) || []);
            setImages(SingleProduct.images || []);
            setPackageInfo(SingleProduct.packageInfo || [{ packing: '', itemNo: '' }]);
            setApplicationInfo(SingleProduct.applicationInfo || ['']);
            setProperties(SingleProduct.properties || ['']);
            setBuyExternalLinks(SingleProduct.buyExternalLinks || { main: '', amazon: '', flipkart: '', noon: '' });
        }
    }, [SingleProduct]);


    console.log(SingleProduct, "product")
    useEffect(() => {
        setApplications(applicationsValue?.data?.data)
        setIndustries(industriesValue?.data?.data)
        setCategory(categories?.data?.data)
    }, [categories, industriesValue, applicationsValue])
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        availableSize: "",
        status: 'active',
        bestSeller: false
    });
    const [images, setImages] = useState([]);
    const [packageInfo, setPackageInfo] = useState([{ packing: '', itemNo: '' }]);
    const [applicationInfo, setApplicationInfo] = useState(['']);
    const [applications, setApplications] = useState([]);
    const [industries, setIndustries] = useState([]);
    let isLoading = false
    const [properties, setProperties] = useState(['']);
    const [buyExternalLinks, setBuyExternalLinks] = useState({
        main: '',
        amazon: '',
        flipkart: '',
        noon: ''
    });
    const [selectedIndustries, setSelectedIndustries] = useState([]);
    const [selectedApplications, setSelectedApplications] = useState([]);
    const [Category, setCategory] = useState([]);

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        console.log(files, "files");

        if (images.length + files.length <= 4) {
            setImages((prev) => [...prev, ...files]);
        }

        e.target.value = '';
    };


    const removeImage = (index) => {
        setImages(prev => prev.filter((_, i) => i !== index));
    };

    const handlePackageChange = (index, field, value) => {
        const values = [...packageInfo];
        values[index][field] = value;
        setPackageInfo(values);
    };


    const handleApplicationInfoChange = (index, value) => {
        const values = [...applicationInfo];
        values[index] = value;
        setApplicationInfo(values);
    };

    const handlePropertiesChange = (index, value) => {
        const values = [...properties];
        values[index] = value;
        setProperties(values);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleIndustriesChange = (selectedList) => {
        setSelectedIndustries(selectedList);
    };

    const handleApplicationsChange = (selectedList) => {
        setSelectedApplications(selectedList);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('hello', images)
        // setIsLoading(true);
        try {
            const productNameRegex = /^[a-zA-Z0-9\s]+$/;
            const priceRegex = /^\d+(\.\d{1,2})?$/;
            const descriptionRegex = /^[a-zA-Z0-9\s.,;:'"!?()-_&]*$/;
            const availableSizeRegex = /^[a-zA-Z0-9 ]+$/;
            const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/;
            const applicationInfoRegex = /^[a-zA-Z0-9\s]+$/;
            const propertiesRegex = /^[a-zA-Z0-9\s]+$/;

            if (!productNameRegex.test(formData.name)) {
                toast.error('Product Name must only contain letters, numbers, and spaces.');
                return;
            }

            if (formData.price && !priceRegex.test(formData.price)) {
                toast.error('Price must be a valid number.');
                return;
            }

            if (formData.description && !descriptionRegex.test(formData.description)) {
                toast.error('Description contains invalid characters.');
                return;
            }

            if (!availableSizeRegex.test(formData.availableSize)) {
                toast.error('Available Size must be alphanumeric.');
                return;
            }

            if (buyExternalLinks.main && !urlRegex.test(buyExternalLinks.main)) {
                toast.error('Main link is not a valid URL.');
                return;
            }
            if (buyExternalLinks.amazon && !urlRegex.test(buyExternalLinks.amazon)) {
                toast.error('Amazon link is not a valid URL.');
                return;
            }
            if (buyExternalLinks.flipkart && !urlRegex.test(buyExternalLinks.flipkart)) {
                toast.error('Flipkart link is not a valid URL.');
                return;
            }
            if (buyExternalLinks.noon && !urlRegex.test(buyExternalLinks.noon)) {
                toast.error('Noon link is not a valid URL.');
                return;
            }


            for (let info of applicationInfo) {
                if (!applicationInfoRegex.test(info)) {
                    toast.error('Application Info contains invalid characters.');
                    return;
                }
            }


            for (let property of properties) {
                if (!propertiesRegex.test(property)) {
                    toast.error('Property contains invalid characters.');
                    return;
                }
            }
            if (images?.length === 0) {
                toast.error('Please add at least one image!');
                return;
            }
            console.log({
                ...formData,
                images,
                packageInfo,
                applicationInfo,
                properties,
                buyExternalLinks,
                selectedIndustries,
                selectedApplications
            });

            mutate({
                data: {
                    ...formData,
                    images,
                    packageInfo,
                    applicationInfo,
                    properties,
                    buyExternalLinks,
                    selectedIndustries,
                    selectedApplications
                }
                , id
            })

        } catch (error) {
            // console.error('Error submitting form:', error);
        } finally {
            // setIsLoading(false);
        }
    };

    console.log(applicationInfo, "applicationInfo", images)

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm space-y-8">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Images</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images?.map((image, index) => (
                        <div key={index} className="relative aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                            <img
                                src={URL.createObjectURL(image)}
                                alt={`Product ${index + 1}`}
                                className="rounded-lg object-cover w-full h-full"
                            />
                            <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    ))}
                    {images?.length < 4 && (
                        <label className="aspect-square bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100">
                            <Plus className="w-8 h-8 text-gray-400" />
                            <span className="mt-2 text-sm text-gray-500">Add Image</span>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"

                            />
                        </label>
                    )}
                </div>
            </div>

            <div className="flex gap-4">
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Name*</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter product name"
                    />
                </div>
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        // required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter price"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
                <select
                    required
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="" disabled>Select a category</option>
                    {
                        Category?.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
                    placeholder="Enter description (optional)"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label className="mb-2 text-sm font-medium text-gray-700">Industries</label>
                    <Multiselect
                        isMulti
                        required
                        options={industries?.map(industry => ({ label: industry.name, value: industry._id }))}
                        value={selectedIndustries}
                        instanceId="industries-select"
                        className="col-span-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        onChange={handleIndustriesChange}
                        closeMenuOnSelect={false}
                        maxMenuHeight={300}
                        isSearchable={false}
                        placeholder="Select Industries"
                        displayValue="name"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-2 text-sm font-medium text-gray-700">Applications</label>
                    <Multiselect
                        isMulti
                        required
                        options={applications?.map(app => ({ label: app.name, value: app._id }))}
                        value={selectedApplications}
                        instanceId="applications-select"
                        className="col-span-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        onChange={handleApplicationsChange}
                        closeMenuOnSelect={false}
                        maxMenuHeight={300}
                        isSearchable={false}
                        placeholder="Select Applications"
                        displayValue="name"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Available Sizes*</label>
                <input
                    type="text"
                    name="availableSize"
                    required
                    value={formData.availableSize}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Main Link</label>
                    <input
                        type="url"
                        value={buyExternalLinks.main}
                        onChange={(e) => setBuyExternalLinks({ ...buyExternalLinks, main: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Amazon Link</label>
                    <input
                        type="url"
                        value={buyExternalLinks.amazon}
                        onChange={(e) => setBuyExternalLinks({ ...buyExternalLinks, amazon: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Flipkart Link</label>
                    <input
                        type="url"
                        value={buyExternalLinks.flipkart}
                        onChange={(e) => setBuyExternalLinks({ ...buyExternalLinks, flipkart: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Noon Link</label>
                    <input
                        type="url"
                        value={buyExternalLinks.noon}
                        onChange={(e) => setBuyExternalLinks({ ...buyExternalLinks, noon: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                    <select
                        required
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="active">Active</option>
                        <option value="archived">Archived</option>
                    </select>
                </div>
                <div className="flex items-center">
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="checkbox"
                            name="bestSeller"
                            className="w-4 h-4 text-blue-500"
                            checked={formData.bestSeller}
                            onChange={handleChange}
                        />
                        <span className="text-sm font-medium text-gray-700">Best Seller</span>
                    </label>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Application Info*</label>
                <div className="space-y-2">
                    {applicationInfo.map((info, index) => (
                        <div key={index} className="flex gap-2">
                            <textarea
                                required
                                value={info}
                                onChange={(e) => handleApplicationInfoChange(index, e.target.value)}
                                className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
                                placeholder={`Application Info ${index + 1}`}
                            />
                            {applicationInfo.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => setApplicationInfo(prev => prev.filter((_, i) => i !== index))}
                                    className="p-2 text-red-500 hover:bg-red-50 rounded-md h-fit"
                                >
                                    <X size={20} />
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => setApplicationInfo(prev => [...prev, ''])}
                        className="inline-flex items-center text-sm text-blue-500 hover:text-blue-600"
                    >
                        <Plus size={16} className="mr-1" /> Add Application Info
                    </button>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Properties*</label>
                <div className="space-y-2">
                    {properties.map((property, index) => (
                        <div key={index} className="flex gap-2">
                            <textarea
                                required
                                value={property}
                                onChange={(e) => handlePropertiesChange(index, e.target.value)}
                                className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
                                placeholder={`Property ${index + 1}`}
                            />
                            {properties.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => setProperties(prev => prev.filter((_, i) => i !== index))}
                                    className="p-2 text-red-500 hover:bg-red-50 rounded-md h-fit"
                                >
                                    <X size={20} />
                                </button>
                            )}
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => setProperties(prev => [...prev, ''])}
                        className="inline-flex items-center text-sm text-blue-500 hover:text-blue-600"
                    >
                        <Plus size={16} className="mr-1" /> Add Property
                    </button>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Package Information*</label>
                <div className="space-y-2">
                    {packageInfo.map((pkg, index) => (
                        <div key={index} className="grid grid-cols-2 gap-4 items-center">
                            <input
                                type="text"
                                required
                                value={pkg.packing}
                                onChange={(e) => handlePackageChange(index, 'packing', e.target.value)}
                                className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Packing"
                            />
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    required
                                    value={pkg.itemNo}
                                    onChange={(e) => handlePackageChange(index, 'itemNo', e.target.value)}
                                    className="flex-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Item No"
                                />
                                {packageInfo.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => setPackageInfo(prev => prev.filter((_, i) => i !== index))}
                                        className="p-2 text-red-500 hover:bg-red-50 rounded-md"
                                    >
                                        <X size={20} />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => setPackageInfo(prev => [...prev, { packing: '', itemNo: '' }])}
                        className="inline-flex items-center text-sm text-blue-500 hover:text-blue-600"
                    >
                        <Plus size={16} className="mr-1" /> Add Package Info
                    </button>
                </div>
            </div>
            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center justify-center"
            >
                {isLoading ? (
                    <>
                        <Loader className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                    </>
                ) : (
                    'Submit Product'
                )}
            </button>
        </form>
    );
};

export default AddProductForm;