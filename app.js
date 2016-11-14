var tobuy=[{name:"Cookie",quantity:10},{name:"Pepsi",quantity:2},{name:"Burger",quantity:3},{name:"Pasta",quantity:9},{name:"Frooti",quantity:4}];
var bought=[];

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService)

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService)
 {
this.items=ShoppingListCheckOffService.tobuy();

this.buying=function(index){
ShoppingListCheckOffService.buyingit(index);
};

this.islength=function(){
	if(this.items.length==0)
	{
		return 0;
	}
	else
		return 1;
}

}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService)
{
	this.items=ShoppingListCheckOffService.boughtit();

	this.isempty=function(){
		if(this.items==0)
			return 0;
		else
			return 1;
	}
}

function ShoppingListCheckOffService()
{
	var service=this;
	var tobuyitems=tobuy;
	var boughts=bought;
	service.tobuy=function (){
		return tobuyitems;
	};

	service.buyingit=function(index){
		boughts.push(tobuyitems[index]);
		tobuyitems.splice(index,1);
	};
	service.boughtit=function(){
		return boughts;
	};

}