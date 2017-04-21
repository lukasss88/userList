(function(){
    'use strict';
    function ModalInstanceCtrl($uibModalInstance,items, img){

        var ctrl = this;

        ctrl.items = items;
        ctrl.img = img;

        ctrl.imgUrl = ctrl.items.$resolve.img.url;
        ctrl.imgTitle = ctrl.items.$resolve.img.title;

        ctrl.ok = function ()
        {
            $uibModalInstance.close();
        };

        ctrl.cancel = function ()
        {
            $uibModalInstance.dismiss('cancel');
        };
    }

    angular.module('app').controller('ModalInstanceCtrl', ['$uibModalInstance', '$scope', ModalInstanceCtrl]);

})();