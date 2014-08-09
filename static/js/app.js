var overgrowthApp = angular.module('overgrowthApp', ['ui.bootstrap', 'ngAnimate']);

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
                        'small': 'http://lorempixel.com/g/290/435/people/1/Original-Edition-Thumb-1',
                        'large': 'http://lorempixel.com/g/800/600/people/1/Original-Edition-Large-1',
                    },
                    {
                        'small': 'http://lorempixel.com/g/290/435/people/2/Original-Edition-Thumb-2',
                        'large': 'http://lorempixel.com/g/800/600/people/2/Original-Edition-Large-2',
                    },
                    {
                        'small': 'http://lorempixel.com/g/290/435/people/3/Original-Edition-Thumb-3',
                        'large': 'http://lorempixel.com/g/800/600/people/3/Original-Edition-Large-3',
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
                        'small': 'http://lorempixel.com/g/290/435/people/4/Overgrowth-Book-1',
                        'large': 'http://lorempixel.com/g/290/435/people/4/Overgrowth-Book-1',
                    },
                    {
                        'small': 'http://lorempixel.com/g/290/435/people/5/Overgrowth-Book-2',
                        'large': 'http://lorempixel.com/g/290/435/people/5/Overgrowth-Book-2',
                    },
                    {
                        'small': 'http://lorempixel.com/g/290/435/people/6/Overgrowth-Book-3',
                        'large': 'http://lorempixel.com/g/290/435/people/6/Overgrowth-Book-3',
                    },
                ]
            }]
        },
        'prints': {
            'section': 'Prints',
            'products': [{
                'name': 'Archival Print No. 1',
                'price_range': "$125",
                'sizes': [{
                    'sized': '8" x 12"',
                    'price': 125,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=No+1.',
                        'large': 'http://placehold.it/800x600&text=No+1.',
                    }
                ]
            },
            {
                'name': 'Archival Print No. 2',
                'price_range': "$125",
                'sizes': [{
                    'sized': '8" x 12"',
                    'price': 125,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=No. 2',
                        'large': 'http://placehold.it/800x600&text=No. 2',
                    }
                ]
            },
            {
                'name': 'Archival Print No. 2',
                'price_range': "$125",
                'sizes': [{
                    'sized': '8" x 12"',
                    'price': 125,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=No. 2',
                        'large': 'http://placehold.it/800x600&text=No. 2',
                    }
                ]
            },
            {
                'name': 'Archival Print No. 3',
                'price_range': "$125",
                'sizes': [{
                    'sized': '8" x 12"',
                    'price': 125,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=No. 3',
                        'large': 'http://placehold.it/800x600&text=No. 3',
                    }
                ]
            },
            {
                'name': 'Archival Print No. 4',
                'price_range': "$125",
                'sizes': [{
                    'sized': '8" x 12"',
                    'price': 125,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=No. 4',
                        'large': 'http://placehold.it/800x600&text=No. 4',
                    }
                ]
            },
            {
                'name': 'Archival Print No. 5',
                'price_range': "$125",
                'sizes': [{
                    'sized': '8" x 12"',
                    'price': 125,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=No. 5',
                        'large': 'http://placehold.it/800x600&text=No. 5',
                    }
                ]
            },
            {
                'name': 'Archival Print No. 6',
                'price_range': "$125",
                'sizes': [{
                    'sized': '8" x 12"',
                    'price': 125,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=No. 6',
                        'large': 'http://placehold.it/800x600&text=No. 6',
                    }
                ]
            },
            {
                'name': 'Archival Print No. 7',
                'price_range': "$125",
                'sizes': [{
                    'sized': '8" x 12"',
                    'price': 125,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=No. 7',
                        'large': 'http://placehold.it/800x600&text=No. 7',
                    }
                ]
            },
            {
                'name': 'Archival Print No. 8',
                'price_range': "$125",
                'sizes': [{
                    'sized': '8" x 12"',
                    'price': 125,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=No. 8',
                        'large': 'http://placehold.it/800x600&text=No. 8',
                    }
                ]
            },
            {
                'name': 'Archival Print No. 9',
                'price_range': "$125",
                'sizes': [{
                    'sized': '8" x 12"',
                    'price': 125,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=No. 9',
                        'large': 'http://placehold.it/800x600&text=No. 9',
                    }
                ]
            },
            {
                'name': 'Archival Print No. 10',
                'price_range': "$125",
                'sizes': [{
                    'sized': '8" x 12"',
                    'price': 125,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=No. 10',
                        'large': 'http://placehold.it/800x600&text=No. 10',
                    }
                ]
            },
            {
                'name': 'Archival Print No. 11',
                'price_range': "$125",
                'sizes': [{
                    'sized': '8" x 12"',
                    'price': 125,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=No. 11',
                        'large': 'http://placehold.it/800x600&text=No. 11',
                    }
                ]
            },
            {
                'name': 'Archival Print No. 12',
                'price_range': "$125",
                'sizes': [{
                    'sized': '8" x 12"',
                    'price': 125,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=No. 12',
                        'large': 'http://placehold.it/800x600&text=No. 12',
                    }
                ]
            },
            {
                'name': 'Archival Print No. 13',
                'price_range': "$125",
                'sizes': [{
                    'sized': '8" x 12"',
                    'price': 125,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=No. 13',
                        'large': 'http://placehold.it/800x600&text=No. 13',
                    }
                ]
            },
            {
                'name': 'Archival Print No. 14',
                'price_range': "$125",
                'sizes': [{
                    'sized': '8" x 12"',
                    'price': 125,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=No. 14',
                        'large': 'http://placehold.it/800x600&text=No. 14',
                    }
                ]
            },
            {
                'name': 'Archival Print No. 15',
                'price_range': "$125",
                'sizes': [{
                    'sized': '8" x 12"',
                    'price': 125,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=No. 15',
                        'large': 'http://placehold.it/800x600&text=No. 15',
                    }
                ]
            }]
        },
        'posters': {
            'section': 'Posters',
            'products': [{
                'name': 'Poster No. 1',
                'price_range': "$10",
                'sizes': [{
                    'sized': '11" x 14"',
                    'price': 10,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=No.+1',
                        'large': 'http://placehold.it/800x600&text=No.+1',
                    }
                ]
            },
            {
                'name': 'Poster No. 2',
                'price_range': "$10",
                'sizes': [{
                    'sized': '11" x 14"',
                    'price': 10,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=No.+2',
                        'large': 'http://placehold.it/800x600&text=No.+2',
                    }
                ]
            },
            {
                'name': 'Poster No. 3',
                'price_range': "$10",
                'sizes': [{
                    'sized': '11" x 14"',
                    'price': 10,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=No.+3',
                        'large': 'http://placehold.it/800x600&text=No.+3',
                    }
                ]
            },
            {
                'name': 'Poster No. 4',
                'price_range': "$10",
                'sizes': [{
                    'sized': '11" x 14"',
                    'price': 10,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=No.+4',
                        'large': 'http://placehold.it/800x600&text=No.+4',
                    }
                ]
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
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=Postcards+Set+(10)+1',
                        'large': 'http://placehold.it/800x600&text=Postcards+Set+(10)+1',
                    },
                    {
                        'small': 'http://placehold.it/290x435&text=Postcards+Set+(10)+2',
                        'large': 'http://placehold.it/800x600&text=Postcards+Set+(10)+2',
                    },
                    {
                        'small': 'http://placehold.it/290x435&text=Postcards+Set+(10)+3',
                        'large': 'http://placehold.it/800x600&text=Postcards+Set+(10)+3',
                    },
                ],
            }, {
                'name': 'Postcard set (25)',
                'price_range': "$30",
                'sizes': [{
                    'sized': '4" x 6"',
                    'price': 30,
                }],
                'images': [
                    {
                        'small': 'http://placehold.it/290x435&text=Postcard+Set+(25)+1',
                        'large': 'http://placehold.it/800x600&text=Postcard+Set+(25)+1',
                    },
                    {
                        'small': 'http://placehold.it/290x435&text=Postcard+Set+(25)+2',
                        'large': 'http://placehold.it/800x600&text=Postcard+Set+(25)+2',
                    },
                    {
                        'small': 'http://placehold.it/290x435&text=Postcard+Set+(25)+3',
                        'large': 'http://placehold.it/800x600&text=Postcard+Set+(25)+3',
                    },
                ],
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













































