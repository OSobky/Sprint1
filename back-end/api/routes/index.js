var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/ProductController');
  omarproductCtrl = require('../controllers/OmarController');

  const authentication = require('../controllers/authentication')(router);
  app = express();
	memberCtrl = require('../controllers/MemberController');





   //-------------------------------Omar Routes-----------------------------------

   router.get('/omar/getProducts', omarproductCtrl.getProducts);
   router.get('/omar/getProduct/:omarproductsId', omarproductCtrl.getProduct);
   router.post('/omar/createProduct', omarproductCtrl.createProduct);
   router.get(
     '/omar/getProductsBySeller/:seller',
     omarproductCtrl.getProductsBySeller
   );
 
   router.get(
     '/omar/getProductsByComponent/:component',
     omarproductCtrl.getProductsByComponent
   );
router.patch('/omar/updateProduct/:omarproductsId', omarproductCtrl.updateProduct);
router.delete('/omar/deleteProduct/:omarproductsId', omarproductCtrl.deleteProduct);


//-------------------------------Product Routes-----------------------------------
router.get('/product/getProducts', productCtrl.getProducts);
router.get('/product/getProduct/:productId', productCtrl.getProduct);
router.get(
  '/product/getProductsBelowPrice/:price',
  productCtrl.getProductsBelowPrice
);
router.post('/product/createProduct', productCtrl.createProduct);
router.patch('/product/updateProduct/:productId', productCtrl.updateProduct);
router.delete('/product/deleteProduct/:productId', productCtrl.deleteProduct);


app.use('/authentication' , authentication);

//-------------------------------Member Routes-----------------------------------
router.get('/member/getMembers', memberCtrl.getMembers);
router.post('/member/createMember', memberCtrl.createMember);
router.patch('/member/updateMember/:memberId', memberCtrl.updateMember);
router.delete('/member/deleteMember/:memberId', memberCtrl.deleteMember);


module.exports = router;
