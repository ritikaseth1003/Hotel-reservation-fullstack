import Hotel from "../models/Hotel.js";

// CREATE
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};

// UPDATE
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted!");
  } catch (err) {
    next(err);
  }
};

// GET
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

// GET ALL
export const getHotels = async (req, res, next) => {
  const limit = parseInt(req.query.limit); // Convert limit to a number
  const min = parseInt(req.query.min) || 1; // Default to 1 if min is not specified
  const max = parseInt(req.query.max) || 999; // Default to 999 if max is not specified
  const featured = req.query.featured === 'true'; // Convert featured to boolean

  try {
    const hotels = await Hotel.find({
      featured: featured,
      cheapestPrice: { $gt: min, $lt: max },
    }).limit(limit);

    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};



// COUNT BY CITY
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities ? req.query.cities.split(",") : [];

  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    console.error("Error counting documents:", err);
    next(err);
  }
};

// COUNT BY TYPE
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};
