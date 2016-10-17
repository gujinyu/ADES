var shopcars=angular.module('shopcars',[]);
			shopcars.controller("shopcarsCtl",function($scope,$http){
				$http.get("shopcars.php").success(function(response){
					$scope.Goods=response;
				});
				$scope.getAllCounts=function(){
					var sumCounts=0;
					for(var t=0;t<($scope.Goods.length);t++){
						sumCounts+=parseInt($scope.Goods[t].Good_count);
					}
					return sumCounts;
				};
				$scope.getAllPrices=function(){
					var sumPrices=0;
					for(var t=0;t<($scope.Goods.length);t++){
					sumPrices+=parseInt($scope.Goods[t].Good_count)*parseFloat($scope.Goods[t].Good_price);
					};
					return sumPrices;
				};
				$scope.DeleteGoods=function(ID){
					var	t=confirm("确定删除？");
				if(t==true){
					var data1={msg:"neirong"};
					var Goodid={params:{GoodID:ID}};
					$http.post("Delete.php",data1,Goodid).success(function(){
						window.location.href="index.html"
					});
				}
				};
				$scope.UpdataGood=function(ID){
				var	t=confirm("确定修改？");
				if(t==true){
					$scope.updataGoods=true;
					var cid=-1;
					for(var k=0; k<$scope.Goods.length;k++){
						if($scope.Goods[k].Good_ID=ID){
							cid=k;
							break;
						}
					};
					$scope.UpdataGoods=$scope.Goods[cid];
				}
				};
				$scope.DeleteAll=function(){
					$http.get("DeleteAll.php").success(function(){
					window.location="index.html";
				});
				}
			});