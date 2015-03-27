.navbar {
    z-index:9999;
}

.page        {
    bottom:0;
    padding-top:200px;
    position:absolute;
    text-align:center;
    top:0;
    width:100%;
}

.page h1    { font-size:60px; }
.page a     { margin-top:50px; }

/* PAGES (specific colors for each page) */
.page-home      { background:#00D0BC; color:#00907c; }
.page-about     { background:#E59400; color:#a55400; }
.page-contact   { background:#ffa6bb; color:#9e0000; }

.page.ng-leave  {
    -webkit-backface-visibility: hidden;
    -webkit-animation:fadeOutDown 0.5s both ease-in;
    -moz-animation:fadeOutDown 0.5s both ease-in;
    animation:fadeOutDown 0.5s both ease-in;   
    z-index:100;
}
.page.ng-enter  {
    -webkit-backface-visibility: hidden;
    -webkit-animation:slideInRight 0.5s both ease-in;
    -moz-animation:slideInRight 0.5s both ease-in;
    animation:slideInRight 0.5s both ease-in;
    z-index:99;
}

/* slide in from the right */
@keyframes slideInRight {
    from    { transform:translateX(100%); }
    to      { transform: translateX(0); }
}

@-moz-keyframes slideInRight {
    from    { -moz-transform:translateX(100%); }
    to      { -moz-transform: translateX(0); }
}

@-webkit-keyframes slideInRight {
    from    { -webkit-transform:translateX(100%); }
    to      { -webkit-transform: translateX(0); }
}

/* slide out to left */
/*@keyframes slideOutLeft {
    to      { transform: translateX(-100%); }
}
@-moz-keyframes slideOutLeft {  
    to      { -moz-transform: translateX(-100%); }
}
@-webkit-keyframes slideOutLeft {
    to      { -webkit-transform: translateX(-100%); }
}

/* slide out and fade */
@keyframes fadeAndSlideLeft {
    to      { transform: translateX(-100%); }
}
@-moz-keyframes fadeAndSlideLeft {
    to      { transform: translateX(-100%); }
}
@-webkit-keyframes fadeAndSlideLeft {
    to      { transform: translateX(-100%); }
}*/

@keyframes fadeAndSlideLeft {
    0%      { transform: translateX(0%);    opacity: 1.0; }
    20%     { transform: translateX(-20%);  opacity: 0.7; }
    40%     { transform: translateX(-40%);  opacity: 0.4; }
    60%     { transform: translateX(-60%);  opacity: 0.2; }
    80%     { transform: translateX(-80%);  opacity: 0.1; }
    100%     { transform: translateX(-100%);opacity: 0.0; }
}
@-moz-keyframes fadeAndSlideLeft {
    0%      { transform: translateX(0%);    opacity: 1.0; }
    20%     { transform: translateX(-20%);  opacity: 0.7; }
    40%     { transform: translateX(-40%);  opacity: 0.4; }
    60%     { transform: translateX(-60%);  opacity: 0.2; }
    80%     { transform: translateX(-80%);  opacity: 0.1; }
    100%     { transform: translateX(-100%);opacity: 0.0; }
}
@-webkit-keyframes fadeAndSlideLeft {
    0%      { transform: translateX(0%);    opacity: 1.0; }
    20%     { transform: translateX(-20%);  opacity: 0.7; }
    40%     { transform: translateX(-40%);  opacity: 0.4; }
    60%     { transform: translateX(-60%);  opacity: 0.2; }
    80%     { transform: translateX(-80%);  opacity: 0.1; }
    100%    { transform: translateX(-100%); opacity: 0.0; }
}
