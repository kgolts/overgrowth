var overgrowthApp = angular.module('overgrowthApp', []);

overgrowthApp.controller('overgrowthController', function($scope) {

    $scope.store = {
        'publications': {
            'section': 'Publications',
            'products': [{
                'name': 'Original Edition',
                'price_range': "$20",
                'sizes': [{
                    'sized': '10.5" x 4.25"',
                    'price': 20
                }],
                'page_count': '38',
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=Publications+Thumb+1',
                        'large': 'http://placehold.it/800x600&text=Publications+Thumb+1',
                    },
                    {
                        'small': 'http://placehold.it/290x435&text=Publications+Thumb+2',
                        'large': 'http://placehold.it/800x600&text=Publications+Thumb+2',
                    },
                    {
                        'small': 'http://placehold.it/290x435&text=Publications+Thumb+3',
                        'large': 'http://placehold.it/800x600&text=Publications+Thumb+3',
                    },
                ]
            }, {
                'name': 'Overgrowth Book (Pre-Order)',
                'price_range': "$40",
                'sizes': [{
                    'sized': '11" x 14"',
                    'price': 40
                }],
                'page_count': '75-150',
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=Publications+2+Thumb+1',
                        'large': 'http://placehold.it/800x600&text=Publications+2+Thumb+1',
                    },
                    {
                        'small': 'http://placehold.it/290x435&text=Publications+2+Thumb+2',
                        'large': 'http://placehold.it/800x600&text=Publications+2+Thumb+2',
                    },
                    {
                        'small': 'http://placehold.it/290x435&text=Publications+2+Thumb+3',
                        'large': 'http://placehold.it/800x600&text=Publications+2+Thumb+3',
                    },
                ]
            }]
        },
        'prints': {
            'section': 'Prints',
            'products': [{
                'name': 'Archival Print',
                'price_range': "$125 - 200",
                'sizes': [{
                    'sized': '8" x 12"',
                    'price': 125,
                }, {
                    'sized': '11" x 17"',
                    'price': 200,
                }],
                'numbers': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
            }]
        },
        'posters': {
            'section': 'Posters',
            'products': [{
                'name': 'Poster',
                'price_range': "$10",
                'sizes': [{
                    'sized': '11" x 14"',
                    'price': 10,
                }],
                'numbers': [1, 2, 3, 4]
            }]
        },
        'postcards': {
            'section': 'Postcards',
            'products': [{
                'name': 'Postcard set (10)',
                'price_range': "$15",
                'sizes': [{
                    'sized': '4" x 6"',
                    'price': 15,
                }],
            }, {
                'name': 'Postcard set (25)',
                'price_range': "$30",
                'sizes': [{
                    'sized': '4" x 6"',
                    'price': 30,
                }],
            }]
        }
    };

    $scope.switchSection = function(product_type) {
        $scope.current_section = $scope.store[product_type];
        $scope.current_variation = $scope.current_section.products[0];
        $scope.current_variation.selected_size = $scope.current_variation.sizes[0];
        $scope.current_variation.selected_quantity = 1;
        if (_.has($scope.current_variation, 'numbers')) {
            $scope.current_variation.selected_number = 1;
        }
        return false;
    };

    $scope.nextProduct = function() {
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

    $scope.stripeCheckout = function() {
        // Open Checkout with further options
        var handler = StripeCheckout.configure({
            key: 'pk_test_4O1woQIrDngFxcp9btGjkFiL',
            image: 'static/img/girl-face-square.jpg',
            token: function(token) {
            // Use the token to create the charge with a server-side script.
            // You can access the token ID with `token.id`
            }
        });
        var total = $scope.current_variation.selected_size.price * $scope.current_variation.selected_quantity;
        var description = $scope.current_variation.selected_quantity + " " + $scope.current_variation.name + " - " + $scope.current_variation.selected_size.sized;
        if ($scope.current_variation.selected_number) {
            description = description + " No. " + $scope.current_variation.selected_number;
        }
        description = description + " ($" + total + ")";
        handler.open({
          name: $scope.current_section.section,
          description: description,
          amount: total * 100,
          address: true
        });
    };

    $scope.current_section = $scope.store.publications;
    $scope.current_variation = $scope.current_section.products[0];
    $scope.current_variation.selected_size = $scope.current_variation.sizes[0];
    $scope.current_variation.selected_quantity = 1;
    if (_.has($scope.current_variation, 'numbers')) {
        $scope.current_variation.selected_number = 1;
    }

});













































