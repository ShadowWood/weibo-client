<template>
    <div class="demo-gallery">
        <ul id="photo-card">
            <li v-for="photo in photos" data-responsive="http://7xu027.com1.z0.glb.clouddn.com/index-background-2048.jpg"
                data-src="http://7xu027.com1.z0.glb.clouddn.com/index-background-2048.jpg" data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>">
                <a href="">
                    <img class="img-responsive" src="http://7xu027.com1.z0.glb.clouddn.com/index-background-2048.jpg">
                    <div class="demo-gallery-poster">
                        <!--<img src="http://sachinchoolur.github.io/lightgallery.js/static/img/zoom.png">-->
                        <i class="material-icons">search</i>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        'props': ['photos'],
        'data': function () {
            return {}
        },
        'compiled': function () {
            require(['lightgallery.js'], function() {
                require(['lg-zoom.js', 'lg-thumbnail.js'], function(){
                    lightGallery(document.getElementById('photo-card'), {
                        thumbnail:true,
                        animateThumb: false,
                        showThumbByDefault: false,
                    });
                })
            });
        }
    }
</script>

<style>
    .demo-gallery > ul {
        margin-bottom: 0;
        padding-left: 15px;
    }
    
    .demo-gallery > ul > li {
        margin-bottom: 15px;
        width: 180px;
        display: inline-block;
        margin-right: 15px;
        list-style: outside none none;
    }
    
    .demo-gallery > ul > li a {
        border: 3px solid #FFF;
        border-radius: 3px;
        display: block;
        overflow: hidden;
        position: relative;
        float: left;
    }
    
    .demo-gallery > ul > li a > img {
        -webkit-transition: -webkit-transform 0.15s ease 0s;
        -moz-transition: -moz-transform 0.15s ease 0s;
        -o-transition: -o-transform 0.15s ease 0s;
        transition: transform 0.15s ease 0s;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        height: 100%;
        width: 100%;
    }
    
    .demo-gallery > ul > li a:hover > img {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
    }
    
    .demo-gallery > ul > li a:hover .demo-gallery-poster > i {
        opacity: 1;
    }
    
    .demo-gallery > ul > li a .demo-gallery-poster {
        background-color: rgba(0, 0, 0, 0.1);
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        -webkit-transition: background-color 0.15s ease 0s;
        -o-transition: background-color 0.15s ease 0s;
        transition: background-color 0.15s ease 0s;
    }
    
    .demo-gallery > ul > li a .demo-gallery-poster > i {
        color: #fff;
        left: 50%;
        margin-left: -10px;
        margin-top: -10px;
        opacity: 0;
        position: absolute;
        top: 50%;
        -webkit-transition: opacity 0.3s ease 0s;
        -o-transition: opacity 0.3s ease 0s;
        transition: opacity 0.3s ease 0s;
    }
    
    .demo-gallery > ul > li a:hover .demo-gallery-poster {
        background-color: rgba(0, 0, 0, 0.5);
    }
    
    .demo-gallery .justified-gallery > a > img {
        -webkit-transition: -webkit-transform 0.15s ease 0s;
        -moz-transition: -moz-transform 0.15s ease 0s;
        -o-transition: -o-transform 0.15s ease 0s;
        transition: transform 0.15s ease 0s;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        height: 100%;
        width: 100%;
    }
    
    .demo-gallery .justified-gallery > a:hover > img {
        -webkit-transform: scale3d(1.1, 1.1, 1.1);
        transform: scale3d(1.1, 1.1, 1.1);
    }
    
    .demo-gallery .justified-gallery > a:hover .demo-gallery-poster > i {
        opacity: 1;
    }
    
    .demo-gallery .justified-gallery > a .demo-gallery-poster {
        background-color: rgba(0, 0, 0, 0.1);
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        -webkit-transition: background-color 0.15s ease 0s;
        -o-transition: background-color 0.15s ease 0s;
        transition: background-color 0.15s ease 0s;
    }
    
    .demo-gallery .justified-gallery > a .demo-gallery-poster > i {
        left: 50%;
        margin-left: -10px;
        margin-top: -10px;
        opacity: 0;
        position: absolute;
        top: 50%;
        -webkit-transition: opacity 0.3s ease 0s;
        -o-transition: opacity 0.3s ease 0s;
        transition: opacity 0.3s ease 0s;
    }
    
    .demo-gallery .justified-gallery > a:hover .demo-gallery-poster {
        background-color: rgba(0, 0, 0, 0.5);
    }
    
    .demo-gallery .video .demo-gallery-poster i {
        height: 48px;
        margin-left: -24px;
        margin-top: -24px;
        opacity: 0.8;
        width: 48px;
    }
    
    .demo-gallery.dark > ul > li a {
        border: 3px solid #04070a;
    }
</style>