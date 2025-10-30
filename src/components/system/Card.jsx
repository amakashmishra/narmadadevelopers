import React, { useState } from "react";
import plan1 from '../../assets/Icons/1bhk.jpeg';
import plan2 from '../../assets/Icons/2bhk.jpg';
import plan3 from '../../assets/Images/MAGAZA-PROJELERI.webp';

const Card = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const configurations = [
        { type: '1 BHK', area: 'Available', image: plan1 },
        { type: '2 BHK', area: 'Available', image: plan2 },
        { type: 'Commercial Shops', area: 'Limited', image: plan3 },
    ];

    const handleOpenPopup = (image) => {
        setSelectedImage(image);
    };

    const handleClosePopup = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <div className='content grid5 mtop'>
                {configurations.map((item, index) => (
                    <div className='box shadow p-4 text-center' key={index}>
                        <h4 className='text-lg font-bold'>{item.type}</h4>
                        <p className='text-sm text-gray-600 mb-2'>{item.area}</p>
                        <button
                            className='btn bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600'
                            onClick={() => handleOpenPopup(item.image)}
                        >
                            Click here
                        </button>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="modal-close" onClick={handleClosePopup}>&times;</button>
                        <img src={selectedImage} alt="Floor Plan" />
                    </div>
                </div>
            )}

        </div>
    );
};

export default Card;
