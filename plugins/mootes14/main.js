{\rtf1\ansi\ansicpg1252\cocoartf1404\cocoasubrtf110
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 var templates = [\
    "root/externallib/text!root/plugins/mootes14/theme.css",\
    "root/externallib/text!root/plugins/mootes14/login.html",\
    "root/externallib/text!root/plugins/mootes14/program.html"\
];\
\
define(templates, function (theme, loginForm, program) \{\
    var plugin = \{\
        settings: \{\
            name: "mootes14",\
            type: "general",\
            menuURL: "#mootes14",\
            icon: "plugins/events/icon.png",\
            lang: \{\
                component: "core"\
            \}\
        \},\
\
        routes: [\
            ["mootes14", "show_program", "showProgram"]\
        ],\
\
        showProgram: function() \{\
            var tpl = \{\};\
            var html = MM.tpl.render(program, tpl);\
            MM.panels.show('center', html, \{title: MM.lang.s("mootes14")\});\
        \}\
    \};\
\
    // Inject allways our custom theme.\
    $("#mobilecssurl").html(theme);\
\
    // Replace the sign-up form with our custom template.\
    $("#add-site_template").html(loginForm);\
\
    // Automatically use the URL of the moodle moot without further checks.\
    MM.checkSite = function(e) \{\
        MM.addSite(e);\
    \};\
\
    // Inject allways our custom theme.\
    MM.loadCachedRemoteCSS = function(e) \{\
        $("#mobilecssurl").html(theme);\
    \};\
\
    // Do not display the manage accounts page.\
    MM._displayManageAccounts = function() \{\
        MM._displayAddSite();\
    \};\
\
    MM.registerPlugin(plugin);\
\
\});}