(function(){
    'use strict';
    function AlbumController(AlbumService, $uibModal, $log) {

        var ctrl = this;

        AlbumService.getItems().then(function(response){
            ctrl.items = response;
        });

        ctrl.pageNum = 0;
        ctrl.nextPage = function(){
            ctrl.pageNum = ctrl.pageNum + 50;
            if(ctrl.pageNum>2500){
                ctrl.pageNum = 2500;
            }
        };
        ctrl.prevPage = function(){
            ctrl.pageNum = ctrl.pageNum - 50;
            if(ctrl.pageNum<0){
                ctrl.pageNum = 0;
            }
        };

        ctrl.open = function (img) {

            var modalInstance = $uibModal.open({
                templateUrl: '/modules/album/modal/modal.tpl.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: 'ctrl',

                resolve: {
                    img: function(){
                        return img;
                    }
                }
            });
            modalInstance.result.then(function (selectedItem) {
                ctrl.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    }

    angular.module('app').controller('AlbumController', ['AlbumService','$uibModal','$log', AlbumController]);
})();
