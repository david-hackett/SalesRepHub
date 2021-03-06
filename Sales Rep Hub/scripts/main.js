document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    navigator.splashscreen.hide();
}

(function ($, doc) {
    var _app,
        _mapElem,
        _mapObj,
        _storeListElem,
        _private,
        _appData = new AppData(),
        _isOnline = true;

    //Private methods
    _private = {
        getLocation: function (options) {
            var dfd = new $.Deferred();

            //Default value for options
            if (options === undefined) {
                options = {
                    enableHighAccuracy: true
                };
            }

            navigator.geolocation.getCurrentPosition(
                function (position) {
                    dfd.resolve(position);
                },
                function (error) {
                    dfd.reject(error);

                   
                },
                options);

            return dfd.promise();
        },

        initMap: function (position) {
            //Delcare function variables
            var myOptions,
                mapObj = _mapObj,
                mapElem = _mapElem,
                pin,
                locations = [],
                latlng;

            _mapElem = mapElem; //Cache DOM element

            // Use Google API to get the location data for the current coordinates
            latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            
            if (!latlng.lat() || latlng.lat() !== "43.465187")
            	latlng = new google.maps.LatLng("52.671880", "-8.554884");

            myOptions = {
                zoom: 11,
                center: latlng,
                timeout: 6000,
                mapTypeControl: false,
                navigationControlOptions: {
                    style: google.maps.NavigationControlStyle.SMALL
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            mapObj = new google.maps.Map(mapElem, myOptions);
            _mapObj = mapObj; //Cache at app level

            pin = [
                {
                    position: latlng,
                    title: "Your Location"
            }
           ];

            _private.addMarkers(pin, mapObj);

            // Get stores nearby
            _appData.getStarbucksLocations(position.coords.latitude, position.coords.longitude)
                .done(function (result) {
                    var len = result.length,
                        pinImage = new google.maps.MarkerImage(
                            "images/qad-logo.png",
                            new google.maps.Size(49, 49),
                            new google.maps.Point(0, 202));


                    for (var i = 0; i < len; i++) {
                        locations.push({
                            Name: result[i].Name,
                            Contact: result[i].Contact,
                            Address: result[i].Address,
                            Phone: result[i].Phone,
                            Link: result[i].Link,
                            City: result[i].City,
                            State: result[i].State,
                            Zip: result[i].Zip,
                            Site: result[i].Site,
                            Currency: result[i].Currency,
                            position: new google.maps.LatLng(result[i].latitude, result[i].longitude),
                            icon: pinImage,
                            animation: google.maps.Animation.DROP
                        });
                    }



                    _private.addMarkers(locations, mapObj);
                })
                .fail(function (e, r, t) {
                    alert("Error loading locations.");
                });
        },

        addMarkers: function (locations, mapObj) {
            var marker,
                currentMarkerIndex = 0;


            function createMarker(index) {
                if (index < locations.length) {
                    var tmpLocation = locations[index];

                    marker = new google.maps.Marker({
                        position: tmpLocation.position,
                        map: mapObj,
                        title: tmpLocation.title,
                        icon: tmpLocation.icon,
                        shadow: tmpLocation.shadow,
                        animation: tmpLocation.animation
                    });

                    marker.addListener('click', function () {
                        //mapObj.setZoom(8);
                        //mapObj.setCenter(marker.getPosition());

                        app.navigate("views/singleCardView.html?cardName=" + tmpLocation["Name"] + "&cardNumber=" + tmpLocation["Name"] + "&cardTel=" + tmpLocation["Phone"] + "&cardCity=" + tmpLocation["City"] + "&cardState=" + tmpLocation["State"] + "&cardZip=" + tmpLocation["Zip"] + "&cardCurr=" + tmpLocation["Currency"] + "&cardSite=" + tmpLocation["Site"] + "&cardContact=" + tmpLocation["Contact"]);
                        //'views/singleCardView.html?cardName=#= data['cm_mstr.cm_addr'] #&cardNumber=#= data['ad_mstr.ad_sort'] #&cardTel=#= data['ad_mstr.ad_phone'] #&cardCity=#= data['ad_mstr.ad_city'] #&cardState=#= data['ad_mstr.ad_state'] #&cardZip=#= data['ad_mstr.ad_zip'] #&cardCurr=#= data['cm_mstr.cm_curr'] #&cardSite=#= data['cm_mstr.cm_site'] #' data-cardId="#= data['cm_mstr.cm_addr'] #" data-role="listview-link" class="j-listview-item"
                    });

                    oneMarkerAtTime();
                }
            }

            function oneMarkerAtTime() {
                google.maps.event.addListener(marker, "animation_changed", function () {
                    if (marker.getAnimation() === null) {
                        createMarker(currentMarkerIndex += 1);
                    }
                });
            }

            createMarker(0);
        },

        initStoreList: function (position) {
            _appData.getStarbucksLocations(position.coords.latitude, position.coords.longitude)
                .done(function (data) {
                    storesListViewModel.load(data);
                })
                .fail(function (e, r, t) {
                    alert("Loading error");
                });
        },

        toggleStoreView: function (index) {
            var isMap = (index === 0);

            if (isMap) {
                $(_storeListElem).hide();
                $(_mapElem).show();
            } else {
                $(_storeListElem).show();
                $(_mapElem).hide();
            }
        }
    };

    _app = {
        init: function () {
            announcementViewModel.load(_appData.getAnnouncements());

            //if (window.localStorage.getItem("cards") === null) {
            //	localStorage.setItem("cards", _appData.getInitialCards());
            //}

            //cardsViewModel.loadFromLocalStorage();
        },

        onAddCardViewShow: function () {
            addCardViewModel.resetView();
        },

        rewardCardShow: function (e) {
            var bonusPoints = e.view.params.bonusPoints,
                cardNumber = e.view.params.cardNumber;

            rewardsViewModel.setValues(cardNumber, bonusPoints);

        },

        rewardCardInit: function (e) {
            var container = e.view.content,
                $cardFront = container.find("#rewardCardFront"),
                $cardBack = container.find("#rewardCardBack");

            singleCardViewModel.appendCardFadeEffect($cardFront, $cardBack);
        },

        singleCardShow: function (args) {
            var cardNumber = args.view.params.cardNumber, // cm_mstr.cm_addr
                cardName = args.view.params.cardName, //ad_mstr.ad_sort
                cardTel = args.view.params.cardTel, //ad_mstr.ad_phone
                cardCity = args.view.params.cardCity, //ad_mstr.ad_city
                cardState = args.view.params.cardState, //ad_mstr.ad_state
                cardZip = args.view.params.cardZip, //ad_mstr.ad_zip
                cardCurr = args.view.params.cardCurr, // cm_mstr.cm_curr
                cardSite = args.view.params.cardSite; //cm_mstr.cm_site
            cardContact = args.view.params.cardContact; //cm_mstr.cm_site

            singleCardViewModel.setValues(cardNumber, cardName, cardTel, cardCity, cardState, cardZip, cardCurr, cardSite, cardContact);
        },

        singleCardInit: function (e) {
            var container = e.view.content,
                $cardFront = container.find("#cardFront"),
                $cardBack = container.find("#cardBack");

            singleCardViewModel.appendCardFadeEffect($cardFront, $cardBack);
        },

        storesInit: function () {
            _mapElem = document.getElementById("map");
            _storeListElem = document.getElementById("storeList");

            $("#btnStoreViewToggle").data("kendoMobileButtonGroup")
                .bind("select", function (e) {
                    _private.toggleStoreView(e.sender.selectedIndex);
                });
        },

        storesShow: function () {
            //Don't attempt to reload map/sb data if offline
            //console.log("ONLINE", _isOnline);
            if (_isOnline === false) {
                alert("Please reconnect to the Internet to load locations.");

                return;
            }

            _private.getLocation()
                .done(function (position) {
                    _private.initStoreList(position);
                    _private.initMap(position);
                })
                .fail(function (error) {
                    alert(error.message); /*TODO: Better handling*/
                });

            if (_isOnline === true) {
                $("#storesContent").show();
                $("#offline").hide();
                google.maps.event.trigger(map, "resize");
            } else {
                $("#storesContent").hide();
                $("#offline").show();
            }
        }
    };

    _app.init();

    $.extend(window, {
        cardsViewModel: _app.cardsViewModel,
        rewardCardShow: _app.rewardCardShow,
        rewardCardInit: _app.rewardCardInit,
        singleCardShow: _app.singleCardShow,
        singleCardInit: _app.singleCardInit,
        onAddCardViewShow: _app.onAddCardViewShow,
        announcementData: _app.announcementData,
        onStoresShow: _app.storesShow,
        storesInit: _app.storesInit
    });
}(jQuery, document));