import express from "express";
import Hotel from "../models/Hotel.js";
import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import { countByCity,countByType } from '../controllers/hotel.js'; 
const router = express.Router();
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
// CREATE
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/:id", verifyAdmin, updateHotel);

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

// GET
router.get("/:id", getHotel);

// GET ALL
router.get("/", getHotels);


// router.get("/room/:id", getHotelRooms);
export default router;
