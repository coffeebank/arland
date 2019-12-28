/**
 * crisp-client - Customer Messaging Made Simple.
 * @version v2.5.5
 * @author Crisp IM SARL https://crisp.chat/
 * @date 12/17/2019
 */
(function() {
    var t = !1;
    try {
        var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        new(function() {
            function t() {
                var t = this,
                    e = "constructor";
                try {
                    if (this.ns = "CrispLoader", this.__console = {
                            warn: function() {},
                            error: function() {},
                            info: function() {},
                            log: function() {},
                            debug: function() {}
                        }, this.__is_development = !1, this.__project_name = "crisp-client", this.__host_assets = "client.crisp.chat", this.__host_relay_client = "client.relay.crisp.chat", this.__host_relay_stream = "stream.relay.crisp.chat", this.__host_settings = "settings.crisp.chat", this.__client_revision = "7f8e042", this.__client_environment = "production", this.__protocol = "https:", this.__url_website = "https://crisp.chat", this.__url_go = "https://go.crisp.chat", this.__url_image = "https://image.crisp.chat", this.__url_game = "https://game.crisp.chat", this.__url_relay_client = this.__protocol + "//" + this.__host_relay_client, this.__url_relay_stream = this.__protocol + "//" + this.__host_relay_stream, this.__url_assets = this.__protocol + "//" + this.__host_assets, this.__url_settings = this.__protocol + "//" + this.__host_settings, this.__rtc_ice = [{
                            urls: ["stun:stun.media.crisp.chat:3478?transport=udp", "stun:stun.media.crisp.chat:3478?transport=tcp", "stun:stun.media.crisp.chat:3479?transport=udp", "stun:stun.media.crisp.chat:3479?transport=tcp"]
                        }, {
                            urls: ["turn:turn.media.crisp.chat:3478?transport=udp", "turn:turn.media.crisp.chat:3478?transport=tcp", "turn:turn.media.crisp.chat:3479?transport=udp", "turn:turn.media.crisp.chat:3479?transport=tcp", "turns:turn.media.crisp.chat:443?transport=tcp"],
                            username: "client_9F9kh",
                            credential: "DPCEHTqUb7jiJ2mvnzcUmFV4mKK6c8jntUXo4gC8tYCbHTocuy9YJiCxpQ4tmG3p"
                        }], this.__circuit_breaker = {
                            domains: [],
                            agents: ["Googlebot", "Bingbot", "Slurp", "DuckDuckBot", "Baiduspider", "YandexBot", "GTmetrix"]
                        }, this.__path_javascripts = "static/javascripts", this.__path_stylesheets = "static/stylesheets", this.__dollar_crisp = "$crisp", this.__check_every = 100, this.__check_timeout = 3e4, this.__legacy_init_delay = 1e3, this.__width_threshold = 280, this.__call_width_minimum = 320, this.__call_height_minimum = 420, this.__loader_script_regex = /(?:http\:|https\:)?\/\/[^\/]+\/l\/([a-zA-Z0-9\-_]+)\.js/i, this.__apply(), this.__is_supported() === !0) {
                        if ("interactive" === document.readyState || "complete" === document.readyState) this.init();
                        else {
                            var _ = document.onreadystatechange || function() {};
                            window.addEventListener("DOMContentLoaded", function() {
                                t.init()
                            }), document.onreadystatechange = function() {
                                "function" == typeof _ && _(), "interactive" !== document.readyState && "complete" !== document.readyState || setTimeout(function() {
                                    t.init()
                                }, t.__legacy_init_delay)
                            }
                        }
                        "undefined" != typeof window[this.__dollar_crisp] && "function" == typeof window[this.__dollar_crisp].__init || this.__include_client()
                    }
                } catch (t) {
                    this.__console.error(this.ns + "." + e, t)
                }
            }
            return t.prototype.init = function() {
                var t = this,
                    e = "init";
                try {
                    if (this.__website_id && this.__initialize_fired !== !0) {
                        this.__initialize_fired = !0;
                        var _ = document.createElement("div");
                        _.id = "crisp-loader", document.getElementsByTagName("body")[0].appendChild(_);
                        var i = function() {
                                var t = window.getComputedStyle(_).getPropertyValue("display");
                                return "none" === t
                            },
                            r = function r() {
                                setTimeout(function() {
                                    t.__remaining_check_timeout -= t.__check_every, "undefined" != typeof window[t.__dollar_crisp] && "function" == typeof window[t.__dollar_crisp].__init && i() === !0 ? (t.__console.info(t.ns + "." + e, "Dependencies loaded"), _.parentNode.removeChild(_), window[t.__dollar_crisp].__init({
                                        dollar_crisp: window[t.__dollar_crisp],
                                        project_name: t.__project_name,
                                        url_go: t.__url_go,
                                        url_image: t.__url_image,
                                        url_game: t.__url_game,
                                        url_relay_client: t.__url_relay_client,
                                        url_relay_stream: t.__url_relay_stream,
                                        url_settings: t.__url_settings,
                                        url_website: t.__url_website,
                                        url_assets: t.__url_assets,
                                        rtc_ice: t.__rtc_ice,
                                        client_environment: t.__client_environment,
                                        client_revision: t.__client_revision,
                                        website_domain: t.__website_domain,
                                        website_id: t.__website_id,
                                        token_id: t.__token_id,
                                        cookie_expire: t.__cookie_expire,
                                        cookie_domain: t.__cookie_domain,
                                        page_url: t.__page_url,
                                        page_domain: t.__page_domain,
                                        browser_useragent: t.__browser_useragent,
                                        browser_timezone: t.__browser_timezone,
                                        browser_capabilities: t.__browser_capabilities,
                                        browser_locales: t.__browser_locales,
                                        ready_trigger: t.__ready_trigger,
                                        runtime_configuration: t.__runtime_configuration,
                                        reset_handler: function() {
                                            t.reset()
                                        }
                                    })) : t.__remaining_check_timeout > 0 ? r() : t.__console.error(t.ns + "." + e, "Could not load dependencies")
                                }, t.__check_every)
                            };
                        r()
                    }
                } catch (t) {
                    this.__console.error(this.ns + "." + e, t)
                }
            }, t.prototype.reset = function() {
                var t = "reset";
                try {
                    this.__apply(), this.init()
                } catch (e) {
                    this.__console.error(this.ns + "." + t, e)
                }
            }, t.prototype.__include_client = function() {
                var t = "__include_client";
                try {
                    this.__include_resource_hint("dns-prefetch", this.__url_relay_client), this.__include_resource_hint("preconnect", this.__url_settings), this.__include_resource_hint("preconnect", this.__url_assets), this.__include_resource_hint("preconnect", this.__url_image), this.__include_client_javascripts(), this.__include_client_stylesheets()
                } catch (e) {
                    this.__console.error(this.ns + "." + t, e)
                }
            }, t.prototype.__include_resource_hint = function(t, e) {
                var _ = "__include_resource_hint";
                try {
                    var i = document.createElement("link");
                    i.setAttribute("href", e), i.setAttribute("rel", t), i.setAttribute("crossorigin", ""), this.__apply_include_attrs(i), document.getElementsByTagName("head")[0].appendChild(i)
                } catch (t) {
                    this.__console.error(this.ns + "." + _, t)
                }
            }, t.prototype.__include_client_javascripts = function() {
                var t = "__include_client_javascripts";
                try {
                    var e = document.createElement("script");
                    e.src = [this.__url_assets + "/", this.__path_javascripts + "/", "client.js?" + this.__client_revision].join(""), e.type = "text/javascript", e.async = 1, this.__apply_include_attrs(e), document.getElementsByTagName("head")[0].appendChild(e)
                } catch (e) {
                    this.__console.error(this.ns + "." + t, e)
                }
            }, t.prototype.__include_client_stylesheets = function() {
                var t = "__include_client_stylesheets";
                try {
                    var e = this.__detect_include_mode(),
                        _ = document.createElement("link");
                    _.href = [this.__url_assets + "/", this.__path_stylesheets + "/", "client_" + e + ".css?" + this.__client_revision].join(""), _.type = "text/css", _.rel = "stylesheet", this.__apply_include_attrs(_), document.getElementsByTagName("head")[0].appendChild(_)
                } catch (e) {
                    this.__console.error(this.ns + "." + t, e)
                }
            }, t.prototype.__apply = function() {
                this.__apply_environment(), this.__apply_detected_capabilities(), this.__apply_primary_locale()
            }, t.prototype.__apply_environment = function() {
                this.__initialize_fired = !1, this.__remaining_check_timeout = this.__check_timeout, this.__website_domain = document.domain, this.__page_url = document.location.href, this.__page_domain = document.location.hostname, this.__browser_useragent = window.navigator.userAgent, this.__browser_timezone = (new Date).getTimezoneOffset(), this.__browser_locales = this.__list_browser_locales(), "string" == typeof CRISP_WEBSITE_ID && CRISP_WEBSITE_ID ? this.__website_id = CRISP_WEBSITE_ID : this.__website_id = this.__detect_website_id_from_dom(), "string" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID ? this.__token_id = CRISP_TOKEN_ID : "number" == typeof CRISP_TOKEN_ID && CRISP_TOKEN_ID ? this.__token_id = CRISP_TOKEN_ID.toString() : this.__token_id = null, "number" == typeof CRISP_COOKIE_EXPIRE && CRISP_COOKIE_EXPIRE > 0 ? this.__cookie_expire = CRISP_COOKIE_EXPIRE : this.__cookie_expire = null, "string" == typeof CRISP_COOKIE_DOMAIN && CRISP_COOKIE_DOMAIN ? this.__cookie_domain = CRISP_COOKIE_DOMAIN : this.__cookie_domain = null, "function" == typeof CRISP_READY_TRIGGER ? this.__ready_trigger = CRISP_READY_TRIGGER : this.__ready_trigger = {}, "object" === ("undefined" == typeof CRISP_RUNTIME_CONFIG ? "undefined" : e(CRISP_RUNTIME_CONFIG)) ? this.__runtime_configuration = CRISP_RUNTIME_CONFIG : this.__runtime_configuration = {}, "object" === ("undefined" == typeof CRISP_INCLUDE_ATTRS ? "undefined" : e(CRISP_INCLUDE_ATTRS)) ? this.__include_attrs = CRISP_INCLUDE_ATTRS : this.__include_attrs = {}
            }, t.prototype.__apply_detected_capabilities = function() {
                var t = "__apply_detected_capabilities";
                try {
                    this.__browser_capabilities = [], "function" == typeof window.MutationObserver && "function" == typeof JSON.stringify && this.__browser_capabilities.push("browsing"), ("function" == typeof window.RTCPeerConnection && "https:" === document.location.protocol && (window.innerWidth || 0) >= this.__call_width_minimum && (window.innerHeight || 0) >= this.__call_height_minimum || this.__is_development === !0) && this.__browser_capabilities.push("call")
                } catch (e) {
                    this.__console.error(this.ns + "." + t, e)
                }
            }, t.prototype.__apply_primary_locale = function() {
                var t = "__apply_primary_locale";
                try {
                    if (this.__runtime_configuration.locale) {
                        var e = this.__browser_locales.indexOf(this.__runtime_configuration.locale);
                        e !== -1 && this.__browser_locales.splice(e, 1), this.__browser_locales.unshift(this.__runtime_configuration.locale)
                    }
                } catch (e) {
                    this.__console.error(this.ns + "." + t, e)
                }
            }, t.prototype.__apply_include_attrs = function(t) {
                var e = "__apply_include_attrs";
                try {
                    for (var _ in this.__include_attrs) this.__include_attrs.hasOwnProperty(_) && t.setAttribute(_, this.__include_attrs[_])
                } catch (t) {
                    this.__console.error(this.ns + "." + e, t)
                }
            }, t.prototype.__detect_website_id_from_dom = function() {
                var t = "__detect_website_id_from_dom",
                    e = null;
                try {
                    for (var _ = document.querySelectorAll("script[src]"), i = 0; i < _.length; i++) {
                        var r = this.__loader_script_regex.exec(_[i].src);
                        if (r && "string" == typeof r[1]) {
                            e = r[1];
                            break
                        }
                    }
                } catch (e) {
                    this.__console.error(this.ns + "." + t, e)
                } finally {
                    return e
                }
            }, t.prototype.__detect_include_mode = function() {
                var t = "__detect_include_mode",
                    e = "default";
                try {
                    var _ = (navigator.userAgent || "").toLowerCase(),
                        i = (navigator.appVersion || "").toLowerCase(),
                        r = ((navigator.vendor || "").toLowerCase(), !1);
                    if (r !== !0 && (_.indexOf("msie") === -1 && i.indexOf("trident/") === -1 || (r = !0)), r !== !0 && _.indexOf("edge") !== -1 && (r = !0), r !== !0) {
                        var n = _.match(/chrom(e|ium)\/([0-9\.]+)/);
                        if (n) {
                            var s = 29;
                            parseInt(n[2], 10) <= s && (r = !0)
                        }
                    }
                    if (r !== !0) {
                        var o = _.match(/firefox\/([0-9\.]+)/);
                        if (o) {
                            var a = 46;
                            parseInt(o[1], 10) <= a && (r = !0)
                        }
                    }
                    if (r !== !0) {
                        var c = _.match(/version\/([0-9\.]+)( mobile\/([^\s]+))? safari\//);
                        if (c) {
                            var l = 9;
                            parseInt(c[1], 10) <= l && (r = !0)
                        }
                    }
                    if (r !== !0) {
                        var h = _.match(/android ([0-9\.]+)/);
                        if (h) {
                            var u = 6;
                            parseInt(h[1], 10) < u && (r = !0)
                        }
                    }
                    r !== !0 && _.indexOf("opera mini/") !== -1 && (r = !0), r === !0 && (e = "legacy")
                } catch (e) {
                    this.__console.error(this.ns + "." + t, e)
                } finally {
                    return e
                }
            }, t.prototype.__is_supported = function() {
                var t = "__is_supported",
                    e = !0;
                try {
                    window.innerWidth && window.innerWidth < this.__width_threshold ? e = !1 : navigator.cookieEnabled !== !0 ? e = !1 : this.__is_domain_banned(this.__page_domain) === !0 ? e = !1 : this.__is_agent_ignored(this.__browser_useragent) === !0 ? e = !1 : window.WebSocket || (e = !1)
                } catch (e) {
                    this.__console.error(this.ns + "." + t, e)
                } finally {
                    return e
                }
            }, t.prototype.__is_domain_banned = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    e = "__is_domain_banned",
                    _ = !1;
                try {
                    if (t)
                        for (var i = 0; i < this.__circuit_breaker.domains.length; i++) {
                            var r = this.__circuit_breaker.domains[i],
                                n = "." + r;
                            if (t === r || t.slice(-1 * n.length) === n) {
                                _ = !0;
                                break
                            }
                        }
                } catch (t) {
                    this.__console.error(this.ns + "." + e, t)
                } finally {
                    return _
                }
            }, t.prototype.__is_agent_ignored = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    e = "__is_agent_ignored",
                    _ = !1;
                try {
                    if (t)
                        for (var i = 0; i < this.__circuit_breaker.agents.length; i++)
                            if (t.indexOf(this.__circuit_breaker.agents[i]) !== -1) {
                                _ = !0;
                                break
                            }
                } catch (t) {
                    this.__console.error(this.ns + "." + e, t)
                } finally {
                    return _
                }
            }, t.prototype.__list_browser_locales = function() {
                var t = "__list_browser_locales",
                    e = [];
                try {
                    for (var _ = navigator.languages && navigator.languages.length > 0 ? navigator.languages : [navigator.language || navigator.userLanguage], i = 0; i < _.length; i++) _[i] && e.push(_[i])
                } catch (e) {
                    this.__console.error(this.ns + "." + t, e)
                } finally {
                    return e
                }
            }, t
        }())
    } catch (e) {
        if (t === !0) throw e
    }
})();