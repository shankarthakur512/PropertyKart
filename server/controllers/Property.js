

import { Property } from '../models/Property.model.js';
import { uploadOnCloudinary } from '../utils/cloudnary.js';

export const PropertyRegister = async (req, res) => {
    const { type, description, location, price } = req.body;
    const imagePath = req.file ? req.file.path : null;  

    const image = await uploadOnCloudinary(imagePath);
    try {
        if (!image) {
            return res.status(400).json({ message: "Image is required" });
        }

        const newProperty = new Property({
            type,
            description,
            location: location.toLowerCase(), 
            image : image.url,
            price
        });

        await newProperty.save();
        res.status(201).json({ message: "Property registered successfully", property: newProperty });

    } catch (error) {
        res.status(500).json({ message: "Error registering property", error });
    }
};


export const GetPropertyByLocation = async (req, res) => {
    const { location } = req.body;

    try {
        const properties = await Property.find({ location: location.toLowerCase() }); 
        if (properties.length === 0) {
            return res.status(404).json({ message: "No properties found in this location" });
        }

        res.status(200).json({ properties });

    } catch (error) {
        res.status(500).json({ message: "Error fetching properties", error });
    }
};

export const GetPropertyById = async (req, res) => {
    const { id } = req.params;  

    try {
        const property = await Property.findById(id);

        if (!property) {
            return res.status(404).json({ message: "Property not found" });
        }

        res.status(200).json({ property });

    } catch (error) {
        res.status(500).json({ message: "Error fetching property", error });
    }
};

