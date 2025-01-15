const {Router} = require('express');

const myController = require('../controllers/myController');

const router = Router();

router.get('/', myController.method1);
router.post('/', myController.method2);

module.exports = router;