const express = require('express')
const router = express.Router()
const AccController = require('../controllers/accController')
const DeptController = require('../controllers/deptController')
const DesigController = require('../controllers/desigController')
const SampleController = require('../controllers/sampleController')
const AvController = require('../controllers/avController')
const RController = require('../controllers/rController')
const CvController = require('../controllers/cvController')
const SdController = require('../controllers/sdController')


// ---------------------------------------------------------------------------------
// Server Checking Route
router.get('/', (req, res) => {
    res.json({success:'Server is Online...', statuscode: 200})
})




// ----------------------------------------------------------------------------------
// All Routes
// ----------------------------------------------------------------------------------

// CREATE

router.post('/acc/create', AccController.create)
router.post('/dept/create', DeptController.create)
router.post('/desig/create', DesigController.create)
// router.post('/upld/create', SampleController.create)
router.post('/upldav/create', AvController.create)
router.post('/upldr/create', RController.create)
router.post('/upldcv/create', CvController.create)
router.post('/upldsd/create', SdController.create)



// READ

router.get('/acc/read', AccController.read)
router.get('/dept/read', DeptController.read)
router.get('/desig/read', DesigController.read)



// UPDATE

router.put('/acc/update', AccController.update)
router.put('/dept/update', DeptController.update)
router.put('/desig/update', DesigController.update)



// DELETE

router.delete('/acc/delete', AccController.delete)
router.delete('/dept/delete', DeptController.delete)
router.delete('/desig/delete', DesigController.delete)



module.exports = router