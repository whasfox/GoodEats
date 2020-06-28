// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Food Delivery',
	dialog: {
		title: 'Food Delivery',
		buttonOk: 'Aceptar',
  	},
	
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
		},
		{
		path: '/taco/',
    	url: 'taco.html',
    	name: 'taco',
		},
		{
		path: '/manzana/',
    	url: 'manzana.html',
    	name: 'Manzana',
		},
		{
		path: '/pinchos/',
    	url: 'pinchos.html',
    	name: 'pinchos',
		},
		{
		path: '/paella/',
    	url: 'paella.html',
    	name: 'paella',
		},
		{
		path: '/alitas/',
    	url: 'alitas.html',
    	name: 'alitas',
		},
		{
		path: '/spaghetti/',
    	url: 'spaghetti.html',
    	name: 'spaghetti',
		},
		{
		path: '/chicken/',
    	url: 'chicken.html',
    	name: 'chicken',
		},
		{
		path: '/papas/',
    	url: 'papas.html',
    	name: 'papas',
		},
		{
		path: '/burger/',
    	url: 'burger.html',
    	name: 'burger',
		},
		{
		path: '/salad/',
    	url: 'salad.html',
    	name: 'salad',
		},
		{
		path: '/calzone/',
    	url: 'calzone.html',
    	name: 'calzone',
		},
		{
		path: '/pizza/',
    	url: 'pizza.html',
    	name: 'pizza',
		},
		{
		path: '/Pago/',
    	url: 'Pago.html',
    	name: 'Pago',
		},
		{
		path: '/paypal/',
    	url: 'paypal.html',
    	name: 'paypal',
		},
		{
		path: '/targeta/',
    	url: 'targeta.html',
    	name: 'targeta',
		},
			
		]
	
	});

// Export selectors engine
var $$ = Dom7;

$$('#btn-alerta').on('click',function(){
	app.dialog.alert('Transaccion Completada!');
	
});
					 




 

