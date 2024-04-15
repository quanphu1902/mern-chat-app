import express from 'express'
import {  logout, signup } from '../controller/auth.controller.js'


const router = express.Router()

router.post('/signup',signup)
router.post('/logout',logout)

export default router