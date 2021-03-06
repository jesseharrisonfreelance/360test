! function(e) {
    function t(r) { if (n[r]) return n[r].exports; var i = n[r] = { exports: {}, id: r, loaded: !1 }; return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t) {
    var n = AFRAME.utils.styleParser;
    if ("undefined" == typeof AFRAME) throw new Error("Component attempted to register before AFRAME was available.");
    AFRAME.registerComponent("event-set", {
        schema: {
            "default": "",
            parse: function(e) {
                var t = n.parse(e),
                    r = {};
                return Object.keys(t).forEach(function(e) {
                    var n = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                    r[n] = t[e]
                }), r
            }
        },
        multiple: !0,
        init: function() { this.eventHandler = null, this.eventName = null },
        update: function(e) { this.removeEventListener(), this.updateEventListener(), this.addEventListener() },
        remove: function() { this.removeEventListener() },
        pause: function() { this.removeEventListener() },
        play: function() { this.addEventListener() },
        updateEventListener: function() {
            var e = this.data,
                t = this.el,
                n = e._event,
                r = e._target;
            delete e._event, delete e._target;
            var i = r ? t.sceneEl.querySelector(r) : t;
            this.eventName = n, this.eventHandler = function() { Object.keys(e).forEach(function(t) { AFRAME.utils.entity.setComponentProperty.call(this, i, t, e[t]) }) }
        },
        addEventListener: function() { this.el.addEventListener(this.eventName, this.eventHandler) },
        removeEventListener: function() { this.el.removeEventListener(this.eventName, this.eventHandler) }
    })
}]);