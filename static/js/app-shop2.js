var overgrowthApp = angular.module('overgrowthApp', ['ui.bootstrap', 'ngAnimate']);

overgrowthApp.controller('overgrowthController', function($scope) {

    $scope.store = {
       
         'publications': {
            'section': 'Publications',
            'products': [
                {
                'name': 'Overgrowth Book (pre-order)',
                'price_range': "75",
                'sizes': [{
                    'sized': '9" x 12"',
                    'price': 75
                }],
                'page_count': '160',
                 'description': 'Signed', 
                'product_id': '5544',
                'images': [
                    {
                        'small': '/public/images/store/OG_Book_Presale_Cover_square-home.jpg',
                        'large': '/public/images/store/OG_Book_Presale_Cover_square.jpg',
                    },
                    {
                        'small': '/public/images/store/OG_Print_Book_Presale_layout_1_square.jpg',
                        'large': '/public/images/store/OG_Print_Book_Presale_layout_1_square.jpg',
                    },
                    {
                        'small': '/public/images/store/OG_Print_Book_Presale_layout_2_square.jpg',
                        'large': '/public/images/store/OG_Print_Book_Presale_layout_2_square.jpg',
                    },
                    {
                        'small': '/public/images/store/OG_Print_Book_Presale_layout_3_square.jpg',
                        'large': '/public/images/store/OG_Print_Book_Presale_layout_3_square.jpg',
                    },
                    {
                        'small': '/public/images/store/OG_Print_Book_Presale_layout_4_square.jpg',
                        'large': '/public/images/store/OG_Print_Book_Presale_layout_4_square.jpg',
                    },
                    {
                        'small': '/public/images/store/OG_Print_Book_Presale_layout_5_square.jpg',
                        'large': '/public/images/store/OG_Print_Book_Presale_layout_5_square.jpg',
                    },
                    {
                        'small': '/public/images/store/OG_Print_Book_Presale_layout_6_square.jpg',
                        'large': '/public/images/store/OG_Print_Book_Presale_layout_6_square.jpg',
                    },
                    {
                        'small': '/public/images/store/OG_Print_Book_Presale_layout_7_square.jpg',
                        'large': '/public/images/store/OG_Print_Book_Presale_layout_7_square.jpg',
                    },
                    {
                        'small': '/public/images/store/OG_Print_Book_Presale_layout_8_square.jpg',
                        'large': '/public/images/store/OG_Print_Book_Presale_layout_8_square.jpg',
                    },
                    {
                        'small': '/public/images/store/OG_Print_Book_Presale_layout_9_square.jpg',
                        'large': '/public/images/store/OG_Print_Book_Presale_layout_9_square.jpg',
                    },
                    {
                        'small': '/public/images/store/OG_Print_Book_Presale_layout_10_square.jpg',
                        'large': '/public/images/store/OG_Print_Book_Presale_layout_10_square.jpg',
                    },
                    {
                        'small': '/public/images/store/OG_Print_Book_Presale_layout_11_square.jpg',
                        'large': '/public/images/store/OG_Print_Book_Presale_layout_11_square.jpg',
                    },
                    {
                        'small': '/public/images/store/OG_Print_Book_Presale_layout_12_square.jpg',
                        'large': '/public/images/store/OG_Print_Book_Presale_layout_12_square.jpg',
                    },
                    {
                        'small': '/public/images/store/OG_Print_Book_Presale_layout_13_square.jpg',
                        'large': '/public/images/store/OG_Print_Book_Presale_layout_13_square.jpg',
                    },
                ]
            },
                {
                'name': 'The Overgrowth Print Collection (pre-order)',
                'price_range': "250",
                'sizes': [{
                    'sized': '16" x 24"',
                    'price': 250
                }],
                'page_count': '38',
                'product_id': '1111',
                    'description': 'Thirty Six Individual Prints, Signed',
                'images': [
                    {
                        'small': '/public/images/store/OG_PB_Presale_Cover_square-home.jpg',
                        'large': '/public/images/store/OG_PB_Presale_Cover_square.jpg',
                    },
                    {
                        'small': '/public/images/store/OG_PB_Presale_Layout_1_square.jpg',
                        'large': '/public/images/store/OG_PB_Presale_Layout_1_square.jpg',
                    },
                    {
                        'small': '/public/images/store/OG_PB_Presale_Layout_2_square.jpg',
                        'large': '/public/images/store/OG_PB_Presale_Layout_2_square.jpg',
                    },
                     {
                        'small': '/public/images/store/OG_PB_Presale_Layout_3_square.jpg',
                        'large': '/public/images/store/OG_PB_Presale_Layout_3_square.jpg',
                    },
                     {
                        'small': '/public/images/store/OG_PB_Presale_Layout_4_square.jpg',
                        'large': '/public/images/store/OG_PB_Presale_Layout_4_square.jpg',
                    },
                ]
            }]
        },
        'posters': {
            'section': 'Posters',
            'products': [{
                'name': 'First Anniversary Poster',
                'price_range': "15",
                'sizes': [{
                    'sized': '18" x 24"',
                    'price': 15
                }],
               'product_id': '3333',
                'page_count': '',
                'description': 'Two-sided, Signed', 
                'images': [
                    {
                        'small': '/static/img/poster-3.jpg',
                        'large': '/static/img/poster-3-big.jpg',
                    },
                    {  'small': '/static/img/poster-2.jpg',
                        'large': '/static/img/poster-2-big.jpg',
                    },
                    {
                        'small': '/static/img/poster-1.jpg',
                        'large': '/static/img/poster-1-big.jpg',
                    }
                ]
            }]
        },
        'workshop': {
            'section': 'Workshop',
            'products': [{
                'name': 'The Overgrowth Summer Workshop',
                'price_range': "3000",
                
               'product_id': '2211',
                'page_count': '',
                'description': '', 
                'descHTML': 'show alt desc',
                 'dates': 'August 21 - 24',
                'images': [
                    {
                        'small': '/public/images/store/OG_Workshop_Title_v2-home.jpg',
                        'large': '/public/images/store/OG_Workshop_Title_v2.jpg',
                    }
                ]
            }]
        }
    };

    $scope.switchSection = function(product_type) {
        if ($scope.current_section != $scope.store[product_type]) {
            $scope.products_changing = true;
            setTimeout(function() {
                $scope.products_changing = false;
            }, 1000);
            $scope.current_section = $scope.store[product_type];
            console.log($scope.current_section);

            $scope.current_variation = $scope.current_section.products[0];
            $scope.current_variation.selected_size = $scope.current_variation.sizes[0];
            $scope.current_variation.selected_quantity = 1;
            if (_.has($scope.current_variation, 'numbers')) {
                $scope.current_variation.selected_number = 1;
            }


            console.log($scope.current_section);
        }
        // $('#store-items').on('slide.bs.carousel', function (e) {
        //   // do something…
        //   var elem = e.relatedTarget;
        //   var target = $(elem).attr('data-id');
        //   $('.nav-store li').removeClass('active');
        //   $('#' + target).addClass('active');
        //   console.log(target, $(target));
        // });

        return false;
    };

    $scope.nextProduct = function() {
        $scope.current_variation.animate = true;

        var idx = _.indexOf($scope.current_section.products, $scope.current_variation) + 1;
        if (_.has($scope.current_section.products, idx)) {
            $scope.current_variation = $scope.current_section.products[idx];
            $scope.current_variation.selected_size = $scope.current_variation.sizes[0];
            $scope.current_variation.selected_quantity = 1;
            if (_.has($scope.current_variation, 'numbers')) {
                $scope.current_variation.selected_number = 1;
            }
        } else {
            $scope.current_variation = _.first($scope.current_section.products);
            $scope.current_variation.selected_size = $scope.current_variation.sizes[0];
            $scope.current_variation.selected_quantity = 1;
            if (_.has($scope.current_variation, 'numbers')) {
                $scope.current_variation.selected_number = 1;
            }
        }
        console.log($scope.current_variation);
        return false;
    };

    $scope.previousProduct = function() {
        $scope.current_variation.animate = true;

        var idx = _.indexOf($scope.current_section.products, $scope.current_variation) - 1;
        if (_.has($scope.current_section.products, idx)) {
            $scope.current_variation = $scope.current_section.products[idx];
            $scope.current_variation.selected_size = $scope.current_variation.sizes[0];
            $scope.current_variation.selected_quantity = 1;
            if (_.has($scope.current_variation, 'numbers')) {
                $scope.current_variation.selected_number = 1;
            }
        } else {
            $scope.current_variation = _.last($scope.current_section.products);
            $scope.current_variation.selected_size = $scope.current_variation.sizes[0];
            $scope.current_variation.selected_quantity = 1;
            if (_.has($scope.current_variation, 'numbers')) {
                $scope.current_variation.selected_number = 1;
            }
        }
        console.log($scope.current_variation);
        return false;
    };

    $scope.incrementQuantity = function() {
        $scope.current_variation.selected_quantity = $scope.current_variation.selected_quantity + 1;
        return false;
    };

    $scope.deincrementQuantity = function() {
        if ($scope.current_variation.selected_quantity > 1) {
            $scope.current_variation.selected_quantity = $scope.current_variation.selected_quantity - 1;
        }
        return false;
    };

    $scope.nextSize = function() {
        var idx = _.indexOf($scope.current_variation.sizes, $scope.current_variation.selected_size) + 1;
        if (_.has($scope.current_variation.sizes, idx)) {
            $scope.current_variation.selected_size = $scope.current_variation.sizes[idx];
        } else {
            $scope.current_variation.selected_size = _.first($scope.current_variation.sizes);
        }
        return false;
    };

    $scope.previousSize = function() {
        var idx = _.indexOf($scope.current_variation.sizes, $scope.current_variation.selected_size) - 1;
        if (_.has($scope.current_variation.sizes, idx)) {
            $scope.current_variation.selected_size = $scope.current_variation.sizes[idx];
        } else {
            $scope.current_variation.selected_size = _.last($scope.current_variation.sizes);
        }
        return false;
    };


    $scope.nextNumber = function() {
        if ($scope.current_variation.selected_number < _.max($scope.current_variation.numbers)) {
            $scope.current_variation.selected_number = $scope.current_variation.selected_number + 1;
        }
        return false;
    };

    $scope.previousNumber = function() {
        _.min($scope.current_variation.numbers);
        if ($scope.current_variation.selected_number > _.min($scope.current_variation.numbers)) {
            $scope.current_variation.selected_number = $scope.current_variation.selected_number - 1;
        }
        return false;
    };

    $scope.priceRange = function(product_type) {
        var r = [];
        _.each($scope.store[product_type].products, function(product) {
            _.each(product.sizes, function(sized) {
                r.push(sized.price);
            });
        });
        var max = _.max(r);
        var min = _.min(r);
        return {'max': max, 'min': min};
    };

    
    $scope.current_section = $scope.store.publications;
    $scope.current_variation = $scope.current_section.products[0];
    $scope.current_variation.selected_size = $scope.current_variation.sizes[0];
    $scope.current_variation.selected_quantity = 1;
    if (_.has($scope.current_variation, 'numbers')) {
        $scope.current_variation.selected_number = 1;
    }

});













































