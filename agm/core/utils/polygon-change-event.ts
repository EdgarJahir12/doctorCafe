declare var google;

google.maps.Polygon.prototype.enableCoordinatesChangedEvent = function () {

    var me = this,
        isBeingDragged = false,
        triggerCoordinatesChanged = function () {
            // Broadcast normalized event
            google.maps.event.trigger(me, 'coordinates_changed');
        };

    // If  the overlay is being dragged, set_at gets called repeatedly,
    // so either we can debounce that or igore while dragging,
    // ignoring is more efficient
    google.maps.event.addListener(me, 'dragstart', function () {
        isBeingDragged = true;
    });

    // If the overlay is dragged
    google.maps.event.addListener(me, 'dragend', function () {
        triggerCoordinatesChanged();
        isBeingDragged = false;
    });

    // Or vertices are added to any of the possible paths, or deleted
    var paths = me.getPaths();
    paths.forEach(function (path, i) {
        google.maps.event.addListener(path, "insert_at", function () {
            triggerCoordinatesChanged();
        });
        google.maps.event.addListener(path, "set_at", function () {
            if (!isBeingDragged) {
                triggerCoordinatesChanged();
            }
        });
        google.maps.event.addListener(path, "remove_at", function () {
            triggerCoordinatesChanged();
        });
    });
};